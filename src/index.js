import { createIdentityProviderClient } from "./actions/create-identity-provider-client.js";
import { createUserPoolClient } from "./actions/create-user-pool-client.js";
import { createUserPool } from "./actions/create-user-pool.js";

// Change these values if you want another pool/client name.
const POOL_NAME = "user-pool-dev";
const NAME_CLIENT = `${POOL_NAME}-client`;

const bootstrap = async () => {
  try {
    console.log("Starting client...");
    const identityProviderClient = createIdentityProviderClient();
    console.log("...client started!");

    console.log("creating user pool...");
    const {
      UserPool: { Id },
    } = await createUserPool(identityProviderClient, POOL_NAME);
    console.log(`...user pool ${POOL_NAME} created! POOL-ID: ${Id}`);

    console.log("creating user pool client...");
    const {
      UserPoolClient: { ClientId },
    } = await createUserPoolClient(identityProviderClient, NAME_CLIENT, Id);
    console.log(
      `...user pool client ${NAME_CLIENT} created! CLIENT-ID: ${ClientId}`
    );
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

bootstrap();
