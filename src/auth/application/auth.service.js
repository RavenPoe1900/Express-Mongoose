const jwt = require("jsonwebtoken");
const config = require("../../_shared/config/config");
const userService = require("../../users/application/user.service");
const RoleService = require("../../roles/application/role.service");
const RoleTypeEnum = require("../../_shared/enum/roles.enum");
const {
  hashPassword,
  comparePassword,
} = require("../../_shared/hash/password.hash");

exports.register = async (email, password) => {
  try {
    let user = await userService.findByEmail(email);
    if (user) {
      return { status: 400, error: "User already exists" };
    }
    const hash = await hashPassword(password);
    const role = await RoleService.findOneByCriteria({
      name: RoleTypeEnum.EMPLOYEE,
    });

    if (!role) {
      console.error('Ensuring "EMPLOYEE" role exist');
      return { status: 500, error: "Server error" };
    }
    user = await userService.create({
      email: email,
      password: hash,
      role: role.data._id,
    });

    const payload = { userId: user.data._id };
    const token = jwt.sign(payload, config.JWT.key, {
      expiresIn: config.JWT.expires,
    });
    return { status: 201, token };
  } catch (error) {
    return { status: 500, error: "Server error" };
  }
};

exports.login = async (email, password) => {
  try {
    const user = await userService.findByEmail(email, true);
    if (!user) {
      return { status: 400, error: "Invalid credentials" };
    }
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return { status: 400, error: "Invalid credentials" };
    }

    const payload = { userId: user.id };
    const token = jwt.sign(payload, config.JWT.key, {
      expiresIn: config.JWT.expires,
    });
    return { status: 200, token };
  } catch (error) {
    return { status: 500, error: "Server error" };
  }
};

exports.getUser = async (userId) => {
  try {
    const user = await userService.findById(userId);
    if (!user) {
      return { status: 404, error: "User not found" };
    }
    return { status: 200, user };
  } catch (error) {
    return { status: 500, error: "Server error" };
  }
};
