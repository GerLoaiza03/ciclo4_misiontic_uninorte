import axios from "axios";
import { useEffect, useState } from "react";

const Inversion = ({ inversion, handleDelete, handleUpdate }) => {
  const [usdValue, setUsdValue] = useState(0);
  const [gainUsd, setGainUsd] = useState(0);
  const [gainPerc, setGainPerc] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [inversionValue, setInversionValue] = useState(
    inversion.curr_inversion
  );
  const [inversionCoins, setInversionCoins] = useState(inversion.coins);

  const getCurrPrice = (inversion) => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/simple/price/?ids=${inversion.coin_name}&vs_currencies=usd`
      )
      .then((response) => {
        const usdValue = response.data[inversion.coin_name].usd;
        setUsdValue(usdValue);

        const gainUsd = usdValue * inversion.coins;
        setGainUsd(gainUsd);

        const gainPerc =
          (gainUsd - inversion.curr_inversion) / inversion.curr_inversion;
        setGainPerc(gainPerc);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCurrPrice(inversion);
  }, [inversion]);

  const formatterCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 3,
  });
  const formatterUsdCoins = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 15, // (causes 2500.99 to be printed as $2,501)
  });
  const formatterPercent = new Intl.NumberFormat("en-US", {
    style: "percent",
    maximumFractionDigits: 4, // (causes 2500.99 to be printed as $2,501)
  });

  return (
    <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm">
        <div
          className={
            gainPerc > 0
              ? "card-header py-3 text-white bg-success"
              : "card-header py-3 text-white bg-danger"
          }
        >
          <h4 className="my-0 fw-normal">{inversion.coin_name}</h4>
        </div>
        <div className="card-body">
          {isEditing ? (
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                id="inversionValor"
                placeholder="inversionValor"
                value={inversionValue}
                onChange={(e) => setInversionValue(e.target.value)}
              />
              <label htmlFor="inversionValor">Inversión</label>
            </div>
          ) : (
            <h2 className="card-title pricing-card-title">
              {formatterCurrency.format(inversion.curr_inversion)}
              <small className="h6 text-muted fw-light d-block">
                Invertido
              </small>
            </h2>
          )}

          {isEditing ? (
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                id="inversionCoins"
                placeholder="inversionCoins"
                value={inversionCoins}
                onChange={(e) => setInversionCoins(e.target.value)}
              />
              <label htmlFor="inversionCoins">Coins</label>
            </div>
          ) : (
            <h3 className="card-title pricing-card-title">
              {inversion.coins}
              <small className="h6 text-muted fw-light d-block">Coins</small>
            </h3>
          )}

          <h3 className="card-title pricing-card-title">
            {formatterUsdCoins.format(usdValue)}
            <small className="h6 text-muted fw-light d-block">Actual</small>
          </h3>

          <h3
            className={
              gainPerc > 0
                ? "card-title pricing-card-title text-success"
                : "card-title pricing-card-title text-danger"
            }
          >
            {formatterCurrency.format(gainUsd)}
            <small className="h6 text-muted fw-light d-block">
              Actual Invertido
            </small>
          </h3>
          <ul className="list-unstyled mt-3 mb-4">
            <li className={gainPerc > 0 ? "text-success" : "text-danger"}>
              <strong>{formatterPercent.format(gainPerc)}</strong>
            </li>
            <li>{new Date(inversion.date).toLocaleDateString()}</li>
          </ul>

          <div className="d-flex mb-2">
            {isEditing ? (
              <button
                type="button"
                className="w-100 btn btn-lg btn-secondary me-1"
                onClick={() => {
                  setIsEditing(false);
                  setInversionValue(inversion.curr_inversion);
                  setInversionCoins(inversion.coins);
                }}
              >
                Cancelar
              </button>
            ) : (
              <button
                type="button"
                className="w-100 btn btn-lg btn-primary me-1"
                disabled={isEditing}
                onClick={() => setIsEditing(true)}
              >
                Editar
              </button>
            )}

            <button
              onClick={() => {
                setIsEditing(false);
                handleUpdate(inversion._id, inversionValue, inversionCoins);
              }}
              disabled={!isEditing}
              type="button"
              className="w-100 btn btn-lg btn-primary ms-1"
            >
              Guardar
            </button>
          </div>

          <button
            onClick={() => handleDelete(inversion._id)}
            type="button"
            className="w-100 btn btn-lg btn-danger"
          >
            Borrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inversion;
