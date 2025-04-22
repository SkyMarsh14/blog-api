import bcrypt from "bcrypt";

const saltRounds = 10;

const hashPassword = async (plainPassword) => {
  try {
    const hash = await bcrypt.hash(plainPassword, saltRounds);
    return hash;
  } catch (err) {
    console.error("Error hashing the password", err);
    throw err;
  }
};
const match = async (plainPassword, hashedPassword) => {
  const result = await bcrypt.compare(plainPassword, hashedPassword);
  return result;
};
export { hashPassword, match };
