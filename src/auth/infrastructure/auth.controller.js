const authService = require("../application/auth.service");

exports.register = async (req, res) => {
  const { email, password } = req.body;
  const result = await authService.register(email, password);
  res
    .status(result.status)
    .json(result.error ? { error: result.error } : { token: result.token });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const result = await authService.login(email, password);
  res
    .status(result.status)
    .json(result.error ? { error: result.error } : { token: result.token });
};

exports.getUser = async (req, res) => {
  const result = await authService.getUser(req.user);
  res
    .status(result.status)
    .json(result.error ? { error: result.error } : result.user);
};
