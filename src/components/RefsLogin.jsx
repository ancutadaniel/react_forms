import { useRef, useState } from "react";
import { isEmail, isNotEmpty } from "../util/validation";

const RefLogin = () => {
  const email = useRef();
  const password = useRef();

  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const [passwordIsInvalid, setPasswordIsInvalid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const emailIsValid = isEmail(enteredEmail);
    const passwordIsValid = isNotEmpty(enteredPassword);

    console.log({ emailIsValid, passwordIsValid });

    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return;
    }

    setEmailIsInvalid(false);

    if (!passwordIsValid) {
      setPasswordIsInvalid(true);
      return;
    }
    setPasswordIsInvalid(false);

    console.dir({ enteredEmail, enteredPassword });

    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input ref={email} id="email" type="email" name="email" />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input ref={password} id="password" type="password" name="password" />
          <div className="control-error">
            {passwordIsInvalid && <p>Please enter a valid password</p>}
          </div>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
};

export default RefLogin;
