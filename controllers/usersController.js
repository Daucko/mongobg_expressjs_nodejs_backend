const Users = require('../model/User');

const getAllUsers = async (req, res) => {
  const users = await Users.find();
  if (!users) res.status(204).json({ message: 'No user(s) found' });
  res.json(users);
};

const deleteUser = async (req, res) => {
  if (!req?.body?.id) res.status(400).json({ message: 'User ID required' });
  const user = await Users.findOne({ _id: req.body.id }).exec();
  if (!user)
    res.status(204).json({ message: `No user matches ID: ${req.body.id}` });
  const result = await user.deleteOne({ _id: req.body.id });
  res.json(result);
};

module.exports = { getAllUsers, deleteUser };
