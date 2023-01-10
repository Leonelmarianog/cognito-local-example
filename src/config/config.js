import * as dotenv from "dotenv";

dotenv.config();

export default Object.freeze({
  aws: {
    AWS_COGNITO_REGION: process.env.AWS_COGNITO_REGION,
    AWS_COGNITO_ACCESS_KEY_ID: process.env.AWS_COGNITO_ACCESS_KEY_ID,
    AWS_COGNITO_SECRET_ACCESS_KEY: process.env.AWS_COGNITO_SECRET_ACCESS_KEY,
    AWS_COGNITO_ENDPOINT: process.env.AWS_COGNITO_ENDPOINT,
  },
});
