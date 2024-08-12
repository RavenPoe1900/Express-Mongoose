const User = require("../../users/application/user.service");

module.exports = async (req, res, next) => {
  const roleId = req.params.id; // Supongo que el ID del rol viene en los parámetros de la ruta

  try {
    const result = await User.findAll({ role: roleId });

    if (result.data.length > 0) {
      return res
        .status(400)
        .json({
          error: "Cannot delete role. Role is assigned to one or more users.",
        });
    }

    next();
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
