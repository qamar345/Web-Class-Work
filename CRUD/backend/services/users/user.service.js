const Users = require("../../model/users.model");

exports.signup = async (req, res) =>
  res.json({
    user: await Users.create(req.body),
    message: "Signup Successfuly",
  });

exports.signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({ email: email });

    if (!user) return res.json({ message: "User not exist!!!" });

    if (user.password === password) {
      return res.json({ message: "Signin Successfully", user });
    } else {
      return res.json({ message: "Invalid user!!!" });
    }
  } catch (error) {
    return res.json(error);
  }
};

exports.forgotPassword = async (req, res) => {
  const { id } = req.params;
  const { newPassword } = req.body;

  try {
    const updatedUser = await Users.findByIdAndUpdate(
      id,
      { $set: { password: newPassword } },
      { new: true, runValidators: true },
    );

    return res.json({ message: "Password updated", updatedUser });
  } catch (error) {
    return res.json(error);
  }
};

exports.deleteUser = async (req, res) =>
  res.json({
    user: await Users.findByIdAndDelete({_id: req.params.id}),
    message: "User deleted!!!",
  });
