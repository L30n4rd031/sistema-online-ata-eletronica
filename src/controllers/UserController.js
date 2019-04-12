const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = {
  async index(req, res) {
    const users = await User.find();

    return res.status(200).json(users);
  },

  async show(req, res) {
    const user = await User.findById(req.params.id);

    return res.status(200).json(user);
  },

  async store(req, res) {
    const user = await User.create(req.body);

    return res.status(201).json(user);
  },

  async update(req, res) {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});

    return res.status(200).json(user);
  },

  async destroy(req, res) {
    const user = await User.findByIdAndRemove(req.params.id);

    return res.status(200).json({"message": "Usuário removido com sucesso."});
  }
};
