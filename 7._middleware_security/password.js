import bcrypt from "bcrypt";

const saltRounds = 12;
const plaintextPassword = "hunter12";
const loginPassword = "hunter123";
const encryptedPassword = "$2b$12$MeL0bmtpilhF5gzMqe5jEeItMaY9FfW7X9xTPbbHYYOh80IG894aq";

const encryptedPasswordResult = await bcrypt.hash(plaintextPassword, saltRounds);
// console.log(encryptedPasswordResult);

const passwordComparison = await bcrypt.compare(loginPassword, encryptedPassword);
console.log(passwordComparison);
