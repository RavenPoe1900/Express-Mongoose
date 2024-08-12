module.exports = [
  {
    model: "Question",
    path: "question",
    select: "content type options correctAnswer",
    options: { lean: true },
  },
];
