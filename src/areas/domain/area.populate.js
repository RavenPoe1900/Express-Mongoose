module.exports = [
  {
    path: "department",
    model: "Department",
    select: "name",
    options: { lean: true },
  },
];
