process.loadEnvFile();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../Models/User.Model");
const redis = require("../Config/redis"); // Asegúrate de que este archivo exporta correctamente el cliente de Redis

class AuthService {
  async login(data) {
    try {
      const user = await User.findOne({ where: { email: data.email } });
      if (!user) {
        throw new Error("User not found");
      }

      const validPassword = await bcrypt.compare(data.password, user.password);
      if (!validPassword) {
        throw new Error("Invalid password");
      }

      // Generar tokens
      const accessToken = jwt.sign(
        { id: user.id },
        process.env.JSON_SECRET_KEY,
        { expiresIn: "1h" }
      );
      const refreshToken = jwt.sign(
        { id: user.id },
        process.env.JSON_SECRET_KEY,
        { expiresIn: "7d" }
      );

      // Guardar tokens en Redis con expiración
      await redis.set(`token:${user.id}`, accessToken);
      await redis.set(`refreshToken:${user.id}`, refreshToken);

      const tokens = await redis.get(
        `token:${user.id}`,
        `refreshToken:${user.id}`
      );
      console.log(tokens);
      return {
        accessToken,
        refreshToken,
        user,
      };
    } catch (err) {
      throw new Error(`Login failed: ${err.message}`);
    }
  }

  async logout(userId) {
    try {
      // Eliminar tokens de Redis
      await redis.del(`token:${userId}`);
      await redis.del(`refreshToken:${userId}`);
      return { message: "Logout successfully" };
    } catch (err) {
      throw new Error(`Logout failed: ${err.message}`);
    }
  }

  async refreshToken(refreshToken) {
    try {
      // Validar el refreshToken
      const { id } = jwt.verify(refreshToken, process.env.JSON_SECRET_KEY);

      // Verificar si el refreshToken existe en Redis
      const storedRefreshToken = await redis.get(`refreshToken:${id}`);
      if (storedRefreshToken !== refreshToken) {
        throw new Error("Invalid refresh token");
      }

      // Generar un nuevo accessToken
      const newAccessToken = jwt.sign({ id }, process.env.JSON_SECRET_KEY, {
        expiresIn: "1h",
      });

      // Guardar el nuevo accessToken en Redis
      await redis.setEx(`token:${id}`, 3600, newAccessToken);

      return { accessToken: newAccessToken };
    } catch (err) {
      throw new Error(`Token refresh failed: ${err.message}`);
    }
  }

  async verifyToken(token) {
    try {
      // Validar el token JWT
      const { id } = jwt.verify(token, process.env.JSON_SECRET_KEY);

      // Verificar si el token está en Redis
      const storedAccessToken = await redis.get(`token:${id}`);
      if (!storedAccessToken || storedAccessToken !== token) {
        throw new Error("Invalid or expired token");
      }

      return { id };
    } catch (err) {
      throw new Error(`Token verification failed: ${err.message}`);
    }
  }
}

module.exports = AuthService;
