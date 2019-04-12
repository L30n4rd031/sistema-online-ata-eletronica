const mongoose = require('mongoose');

const Ata = mongoose.model('Ata');

module.exports = {
  async index(req, res) {
    const atas = await Ata.find();

    return res.status(200).json(atas);
  },

  async show(req, res) {
    const ata = await Ata.findById(req.params.id);

    return res.status(200).json(ata);
  },

  async store(req, res) {
    const ata = await Ata.create(req.body);

    return res.status(201).json(ata);
  },

  async update(req, res) {
    const ata = await Ata.findByIdAndUpdate(req.params.id, req.body, {new: true});

    return res.status(200).json(ata);
  },

  async destroy(req, res) {
    const ata = await Ata.findByIdAndRemove(req.params.id);

    return res.status(200).json({"message": "Ata removida com sucesso."});
  }
};
