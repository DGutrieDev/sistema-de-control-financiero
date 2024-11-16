import "../styles/Access.css";
import image from "../assets/images/bg-img.jpg";
import { useState } from "react";
import { createUsers } from "../services/apiServices";

const RegisterPage = () => {
  const [dni, setDni] = useState("");
  const [name, setName] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const user = {
      dni,
      name,
      lastname,
      email,
      password,
    };
    if (
      !user.dni ||
      !user.name ||
      !user.lastname ||
      !user.email ||
      !user.password
    ) {
      return;
    } else {
      const response = await createUsers(user);
      if (response){
        window.location.href = "/login";
      }
      console.log(response);
    }
  };

  return (
    <div className="access_container">
      <svg
        className="login__blob"
        viewBox="0 0 566 840"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="mask0" mask-type="alpha">
          <path
            d="M342.407 73.6315C388.53 56.4007 394.378 17.3643 391.538 
      0H566V840H0C14.5385 834.991 100.266 804.436 77.2046 707.263C49.6393 
      591.11 115.306 518.927 176.468 488.873C363.385 397.026 156.98 302.824 
      167.945 179.32C173.46 117.209 284.755 95.1699 342.407 73.6315Z"
          />
        </mask>

        <g mask="url(#mask0)">
          <path
            d="M342.407 73.6315C388.53 56.4007 394.378 17.3643 391.538 
      0H566V840H0C14.5385 834.991 100.266 804.436 77.2046 707.263C49.6393 
      591.11 115.306 518.927 176.468 488.873C363.385 397.026 156.98 302.824 
      167.945 179.32C173.46 117.209 284.755 95.1699 342.407 73.6315Z"
          />

          <image href={image} />
        </g>
      </svg>
      <div className="login container grid">
        <h1 className="login__title">Create new account.</h1>

        <div className="login__area">
          <form action="" className="login__form">
            <div className="login__content grid">
              <div className="login__box">
                <input
                  type="email"
                  id="dniCreate"
                  required
                  placeholder=" "
                  className="login__input"
                  value={dni}
                  onChange={(e) => setDni(e.target.value)}
                />
                <label htmlFor="dniCreate" className="login__label">
                  DNI
                </label>

                <i className="ri-mail-fill login__icon"></i>
              </div>
              <div className="login__group grid">
                <div className="login__box">
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder=" "
                    className="login__input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="name" className="login__label">
                    Name
                  </label>
                  <i className="ri-id-card-fill login__icon"></i>
                </div>

                <div className="login__box">
                  <input
                    type="text"
                    id="surnames"
                    required
                    placeholder=" "
                    className="login__input"
                    value={lastname}
                    onChange={(e) => setlastname(e.target.value)}
                  />
                  <label htmlFor="surnames" className="login__label">
                    Surnames
                  </label>

                  <i className="ri-id-card-fill login__icon"></i>
                </div>
              </div>
              <div className="login__box">
                <input
                  type="email"
                  id="emailCreate"
                  required
                  placeholder=" "
                  className="login__input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="emailCreate" className="login__label">
                  Email
                </label>

                <i className="ri-mail-fill login__icon"></i>
              </div>

              <div className="login__box">
                <input
                  type="password"
                  id="passwordCreate"
                  required
                  placeholder=" "
                  className="login__input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="passwordCreate" className="login__label">
                  Password
                </label>

                <i
                  className="ri-eye-off-fill login__icon login__password"
                  id="loginPasswordCreate"
                ></i>
              </div>
            </div>

            <button
              type="submit"
              className="login__button"
              onClick={handleSubmit}
            >
              Create account
            </button>
          </form>

          <p className="login__switch">
            Already have an account?
            <button id="loginButtonAccess">
              <a href="/">Log In</a>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
