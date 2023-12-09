const Present = require('../models/present');

exports.presents_get_all = (req, res, next) => {
  Present.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => console.log(err));
};

exports.presents_add_new = (req, res, next) => {
  var present = new Present({
    name: req.body.name,
    receiver: req.body.receiver,
    price: req.body.price,
    link: req.body.link,
    description: req.body.description,
  });
  present.save();
  res.status(201).send('OK');
};

exports.present_get_by_id = (req, res, next) => {
  const { id } = req.params;
  Present.findById(id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => res.status(404).json(err));
};

exports.present_change = (req, res, next) => {
  const { id } = req.params;
  const updatedPresentData = {
    name: req.body.name,
    receiver: req.body.receiver,
    price: req.body.price,
    link: req.body.link,
    description: req.body.description,
  };
  Present.findByIdAndUpdate(id, updatedPresentData)
    .then(() => {
      res.status(200).send('Edited');
    })
    .catch((err) => res.status(404).json(err));
};

exports.present_delete = (req, res, next) => {
  const { id } = req.params;
  Present.findByIdAndDelete(id)
    .then(() => {
      res.status(200).json('Deleted');
    })
    .catch((err) => res.status(404).json(err));
};
