const { v4: uuidv4 } = require("uuid");

const userData = [
  {
    id: uuidv4(),
    userName: "iftekhar",
    email: "srn@gmail.com",
  },
  {
    id: uuidv4(),
    userName: "soron",
    email: "jahan@gmail.com",
  },
];
module.exports = userData;
