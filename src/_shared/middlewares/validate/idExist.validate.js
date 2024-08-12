module.exports = (model, message) => {
  return async (value, helpers) => {
    try {
      if (!value) return true;

      const item = await model.findById(value);

      if (item.status !== 200) {
        return helpers.message(message);
      }
      return true;
    } catch (error) {
      console.log(error);
    }
  };
};
