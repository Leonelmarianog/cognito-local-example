import {
  CreateUserPoolClientCommand,
  ExplicitAuthFlowsType,
} from "@aws-sdk/client-cognito-identity-provider";

const createUserPoolClient = async (client, clientName, poolId) => {
  const command = new CreateUserPoolClientCommand({
    UserPoolId: poolId,
    ClientName: clientName,
    ExplicitAuthFlows: [ExplicitAuthFlowsType.ALLOW_USER_PASSWORD_AUTH],
  });

  return client.send(command);
};

export { createUserPoolClient };
