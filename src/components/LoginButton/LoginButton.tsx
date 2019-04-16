import React from "react";
import Button from "react-bootstrap/Button";

interface ILoginButtonProps {
  login: () => any;
  logout: () => any;
  isAuthenticated: boolean;
}

const LoginButton = (props: ILoginButtonProps) => {
  const { login, logout, isAuthenticated } = props;
  return (
    <React.Fragment>
      {isAuthenticated ? (
        <Button variant="primary" onClick={logout}>
          Log Out
        </Button>
      ) : (
        <Button variant="primary" onClick={login}>
          Log In
        </Button>
      )}
    </React.Fragment>
  );
};

export default LoginButton;
