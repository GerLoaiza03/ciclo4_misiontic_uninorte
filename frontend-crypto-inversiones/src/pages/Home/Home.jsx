import axios from "axios";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import Inversion from "./components/Inversion";

const Home = () => {
  const [inversions, setInversions] = useState([]);

  const getInversions = () => {
    axios
      .get("http://localhost:5000/api/obtener-inversiones")
      .then((response) => {
        setInversions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (_id) => {
    console.log("DELETED", _id);
    swal({
      title: "¿Estás Seguro(a)?",
      text: "Si borras la inversión, no se podrá recuperar...",
      icon: "error",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:5000/api/borrar-inversion/${_id}`)
          .then(() => {
            getInversions();
            swal("La inversión " + _id + " fue borrada", {
              icon: "success",
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  const handleUpdate = (_id, curr_inversion, coins) => {
    axios
      .patch("http://localhost:5000/api/actualizar-inversion", {
        _id,
        curr_inversion,
        coins,
      })
      .then((response) => {
        console.log(response);
        getInversions();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getInversions();
  }, []);

  return (
    <div className="p-3 pb-md-4 mx-auto text-center">
      <h1 className="display-4 fw-normal mb-5">Crypto Inversiones</h1>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {inversions.map((inversion) => {
          return (
            <Inversion
              key={inversion._id}
              inversion={inversion}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
