import { config } from "dotenv";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
config();

const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`
);