import "../styles/Access.css";
import image from "../assets/images/bg-img.jpg";

const LoginPage = () => {

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
      <div className="login container grid" id="loginAccessRegister">
        <div className="login__access">
          <h1 className="login__title">Log in to your account</h1>

          <div className="login__area">
            <form action="" className="login__fom">
              <div className="login__content grid">
                <div className="login__box">
                  <input
                    type="text"
                    className="login__input"
                    id="email"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="email" className="login__label">
                    Email
                  </label>
                  <i className="ph ph-envelope-simple login__icon"></i>
                </div>
                <div className="login__box">
                  <input
                    type="password"
                    className="login__input"
                    id="password"
                    placeholder=""
                    required
                  />
                  <label htmlFor="password" className="login__label">
                    Password
                  </label>
                  <i
                    className="ph ph-eye login__icon login__password"
                    id="LoginPassword"
                  ></i>
                </div>
              </div>
              <a href="#" className="login__forgot">
                Forgot your password?
              </a>
              <button type="submit" className="login__button">
                Login
              </button>
            </form>
            <p className="login__switch">
              Don't have an account?
              <button id="loginButtonRegister">
                <a href="/register">Create account</a>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
