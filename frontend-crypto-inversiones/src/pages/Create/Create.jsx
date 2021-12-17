import axios from "axios";
import { useState } from "react";
import swal from "sweetalert";
import "./styles.css";

const Create = () => {
  const [coin_name, setCoinName] = useState("");
  const [curr_inversion, setCurrInversion] = useState("");
  const [coins, setCoins] = useState("");
  const [month, setMonth] = useState(() => new Date().getUTCMonth() + 1);
  const [day, setDay] = useState(() => new Date().getUTCDate());
  const [year, setYear] = useState(() => new Date().getUTCFullYear());

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(coin_name);
    // console.log(curr_inversion);
    // console.log(coins);
    // console.log(day);
    // console.log(month);
    // console.log(year);
    axios
      .post("http://localhost:5000/api/crear-inversion", {
        coin_name,
        curr_inversion,
        coins,
        date: { day, month, year },
      })
      .then((response) => {
        swal("Nueva inversión creada!", `Id: ${response.data._id}`, "success");
        setCoinName("");
        setCoins("");
        setCurrInversion("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal">Crear Inversión</h1>
      </div>
      <div className="text-center">
        <form className="form-signin" onSubmit={onSubmitHandler}>
          <img
            className="mb-4"
            src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Bitcoin-BTC-icon.png"
            alt="BITCOIN"
            width="72"
            height="72"
          />

          <div className="form-floating mb-2">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Nombre de Coin"
              required
              value={coin_name}
              onChange={(e) => setCoinName(e.target.value)}
            />
            <label htmlFor="floatingInput">Nombre de Coin</label>
          </div>

          <div className="form-floating mb-2">
            <input
              type="number"
              className="form-control"
              id="floatingInversion"
              placeholder="Monto Invertido"
              required
              value={curr_inversion}
              onChange={(e) => setCurrInversion(e.target.value)}
            />
            <label htmlFor="floatingInput">Inversión USD</label>
          </div>

          <div className="form-floating mb-2">
            <input
              type="number"
              className="form-control"
              id="floatingInversion"
              placeholder="Coins compradas"
              required
              required
              value={coins}
              onChange={(e) => setCoins(e.target.value)}
            />
            <label htmlFor="floatingInput">Coins Compradas</label>
          </div>

          <div className="row mb-2">
            <div className="col-4">
              <div className="form-floating">
                <select
                  className="form-select"
                  id="floatingMonth"
                  aria-label="Floating Month"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                >
                  {[...Array(12)].map((value, i) => {
                    return (
                      <option key={"month_" + i} value={i + 1}>
                        {i + 1}
                      </option>
                    );
                  })}
                </select>

                <label htmlFor="floatingSelect">Mes</label>
              </div>
            </div>

            <div className="col-4">
              <div className="form-floating">
                <select
                  className="form-select"
                  id="floatingDay"
                  aria-label="Floating Day"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                >
                  {[...Array(31)].map((e, i) => {
                    return (
                      <option key={"day_" + i} value={i + 1}>
                        {i + 1}
                      </option>
                    );
                  })}
                </select>
                <label htmlFor="floatingSelect">Día</label>
              </div>
            </div>
            <div className="col-4">
              <div className="form-floating">
                <select
                  className="form-select"
                  id="floatingYear"
                  aria-label="Floating Year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                >
                  {[...Array(15)].map((e, i) => {
                    return (
                      <option key={"year_" + i + 2021} value={i + 2021}>
                        {i + 2021}
                      </option>
                    );
                  })}
                </select>
                <label htmlFor="floatingSelect">Año</label>
              </div>
            </div>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Crear
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
