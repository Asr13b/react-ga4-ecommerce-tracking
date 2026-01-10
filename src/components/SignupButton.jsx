import ReactGA from "react-ga4";

function SignupButton() {
  const handleClick = () => {
    ReactGA.event("signup_click", {
      button: "signup",
      page: window.location.pathname,
    });
  };

  return <button onClick={handleClick}>Sign Up</button>;
}

export default SignupButton;
