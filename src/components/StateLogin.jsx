import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import Input from "./Input";
import useInput from "../hooks/useInput";

const StateLogin = () => {
  // const [enteredValue, setEnteredValue] = useState({
  //   email: "",
  //   password: "",
  // });

  // const [touched, setTouched] = useState({
  //   email: false,
  //   password: false,
  // });

  const {
    value: emailValue,
    hasError: emailHasError,
    handleInputBlur: handleEmailBlur,
    handleInputChange: handleEmailChange,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    hasError: passwordHasError,
    handleInputBlur: handlePasswordBlur,
    handleInputChange: handlePasswordChange,
  } = useInput("", (value) => hasMinLength(value, 6) && isNotEmpty(value));

  // const emailIsInvalid =
  //   !isEmail(emailValue) && !isNotEmpty(emailValue) && emailTouched;

  // const passwordIsInvalid =
  //   !hasMinLength(value, 6) && !isNotEmpty(value) && touched.password;

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setEnteredValue((prevState) => ({ ...prevState, [name]: value }));
  //   setTouched((prevState) => ({ ...prevState, [name]: false }));
  // };

  // const handleInputBlur = (event) => {
  //   const { name } = event.target;
  //   setTouched((prevState) => ({ ...prevState, [name]: true }));
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (emailHasError || passwordHasError) {
      return;
    }

    console.log({ emailValue, passwordValue });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          id="email"
          type="email"
          name="email"
          label="Email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && "Please enter a valid email"}
        />
        <Input
          id="password"
          type="password"
          name="password"
          label="Password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
          error={
            passwordHasError &&
            "Please enter a valid password (at least 6 characters)"
          }
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
};

export default StateLogin;
