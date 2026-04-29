import bcrypt from "bcryptjs";

const password = "Tradishine101"; // or a stronger password

bcrypt.hash(password, 10).then((hash) => {
  console.log(hash);
});
