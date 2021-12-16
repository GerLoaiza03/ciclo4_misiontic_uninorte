const Inversion = require("../models/inversion");

module.exports.get_inversions = (req, res) => {
  Inversion.find()
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

module.exports.create_inversion = (req, res) => {
  const { coin_name, curr_inversion, coins, date } = req.body;

  const fecha = new Date(Date.UTC(date.year, date.month - 1, date.day));

  Inversion.create({
    coin_name,
    curr_inversion,
    coins,
    date: fecha,
  })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

module.exports.delete_inversion = (req, res) => {
  const { id } = req.params;
  Inversion.deleteOne({ _id: id })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

module.exports.update_inversion = (req, res) => {
  const { curr_inversion, coins, _id } = req.body;

  Inversion.updateOne(
    { _id },
    {
      $set: {
        curr_inversion,
        coins,
      },
    }
  )
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};
