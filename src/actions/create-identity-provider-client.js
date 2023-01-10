import { CognitoIdentityProviderClient } from "@aws-sdk/client-cognito-identity-provider";
import config from "../config/config.js";

export const createIdentityProviderClient = () => {
  return new CognitoIdentityProviderClient({
    region: config.aws.AWS_COGNITO_REGION,
    endpoint: config.aws.AWS_COGNITO_ENDPOINT,
    credentials: {
      accessKeyId: config.aws.AWS_COGNITO_ACCESS_KEY_ID,
      secretAccessKey: config.aws.AWS_COGNITO_SECRET_ACCESS_KEY,
    },
  });
};
