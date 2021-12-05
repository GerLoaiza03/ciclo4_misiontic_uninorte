import { useState } from "react";
import validator from "validator";
import swal from "sweetalert";

const ValidadorOnChange = () => {
  const [values, setValues] = useState({ email: "", password: "" });

  const [error, setError] = useState({ email: "", password: "" });

  const onChangeHandler = (e) => {
    setValues({
      ...values,
      [e.target.id]: e.target.value,
    });

    // let isValidEmail = true;
    // let isValidPassword = true;
    if (e.target.id === "email") {
      const isValidEmail = validator.isEmail(e.target.value);
      if (!isValidEmail) {
        setError((error) => {
          return { ...error, email: "Correo inválido." };
        });
      } else {
        setError((error) => {
          return { ...error, email: "" };
        });
      }
    }
    if (e.target.id === "password") {
      const isValidPassword = validator.isLength(e.target.value, {
        min: 6,
        max: 15,
      });
      console.log(isValidPassword);
      if (!isValidPassword) {
        setError((error) => {
          return {
            ...error,
            password:
              "Contraseña debe tener mínimo 6 caracteres y máximo 15 caracteres.",
          };
        });
      } else {
        setError((error) => {
          return { ...error, password: "" };
        });
      }
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (values.email === "" || values.password === "") return;
    if (!error.password && !error.email) {
      setValues({ email: "", password: "" });
      swal("Enviando al Backend...!", values.email, "success");
    }
  };

  return (
    <div className="card">
      <div class="card-header">
        <h2 className="text-info">Validación a nivel de onChange</h2>
      </div>
      <div class="card-body">
        <form className="form-floating" onSubmit={onSubmitHandler} noValidate>
          <div className="form-floating mb-3">
            <input
              type="email"
              className={
                error.email ? "form-control is-invalid" : "form-control"
              }
              id="email"
              placeholder="name@example.com"
              value={values.email}
              onChange={onChangeHandler}
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
              id="password"
              placeholder="Password"
              value={values.password}
              onChange={onChangeHandler}
            />
            <label htmlFor="floatingPassword">Password</label>
            {error.password ? (
              <div className="text-danger">{error.password}</div>
            ) : null}
          </div>

          <div className="form-floating mb-3">
            <button type="submit" className="btn btn-info">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ValidadorOnChange;
