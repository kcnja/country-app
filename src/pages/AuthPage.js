import { useState, Fragment } from "react";
import LoginForm from "../components/Auth/LoginForm";
import RegisterForm from "../components/Auth/RegisterForm";

const AuthPage = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  //   const [userEmail, setUserEmail] = useState(" ");
  //   const [userPassword, setUserPassword] = useState(" ");

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const authSuccess = (userName) => {
    // setUserEmail(email);
    // setUserPassword(password);
    props.onAuthSuccess(userName);
  };
  return (
    <Fragment>
      {isLogin ? (
        <LoginForm onLogin={authSuccess} onSwitch={switchAuthModeHandler} />
      ) : (
        <RegisterForm
          countryNames={props.countryNames}
          onRegister={authSuccess}
          onSwitch={switchAuthModeHandler}
        />
      )}
    </Fragment>
  );
};

export default AuthPage;
