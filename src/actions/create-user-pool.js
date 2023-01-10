import {
  CreateUserPoolCommand,
  VerifiedAttributeType,
} from "@aws-sdk/client-cognito-identity-provider";

export const createUserPool = async (client, config) => {
  const { poolName } = config;

  const command = new CreateUserPoolCommand({
    PoolName: poolName,
    AutoVerifiedAttributes: [VerifiedAttributeType.EMAIL],
    Schema: [{ Name: "email", Required: true }],
    UsernameConfiguration: { CaseSensitive: false },
  });

  return client.send(command);
};
