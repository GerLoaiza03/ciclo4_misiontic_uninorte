import { useState } from "react";
import validator from "validator";
import swal from "sweetalert";
import { handleErrors } from "./handleErrors";

const ValidadorSubmit = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "" });

  //   const onChangeHandler = (e) => {
  //     console.log(e.target.value);
  //     setEmail(e.target.value);
  //   };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setError({ email: "", password: "" });
    const isValidEmail = validator.isEmail(email);
    const isValidPassword = validator.isLength(password, { min: 6, max: 15 });
    const error = handleErrors(isValidEmail, isValidPassword);
    if (isValidEmail && isValidPassword) {
      setEmail("");
      setPassword("");
      swal("Enviando al Backend...!", email, "success");
    } else {
      setError(error);
    }
  };

  return (
    <div className="card my-2">
      <div class="card-header">
        <h2 className=" text-success">Validación a nivel de Formulario</h2>
      </div>
      <div class="card-body">
        <form className="form-floating" onSubmit={onSubmitHandler} noValidate>
          <div className="form-floating mb-3">
            <input
              type="email"
              className={
                error.email ? "form-control is-invalid" : "form-control"
              }
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>

            {error.email ? (
              <div className="text-danger">{error.email}</div>
            ) : null}
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className={
                error.password ? "form-control is-invalid" : "form-control"
              }
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
            {error.password ? (
              <div className="text-danger">{error.password}</div>
            ) : null}
          </div>

          <div className="form-floating mb-3">
            <button type="submit" className="btn btn-success">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ValidadorSubmit;
