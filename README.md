# Cognito-local-example

Example of how to create user pools using cognito-local as an emulator for AWS Cognito Service.

> ⚠️ This just creates an user pool for the emulator, to actually create users for those user pools you have to create an API that handles the sign-up of users using something like [this](https://www.npmjs.com/package/amazon-cognito-identity-js).

## Installation

```
npm install
```

## Commands

```
start # Run cognito emulator
build # Build project
pool-list:create # Create an user pool
```

## Environment variables

| Variable                      | Description                                                                                                                                             |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AWS_COGNITO_REGION            | Physical location in the world where Amazon clusters data centers for application and service delivery in AWS. Can be any value using a local emulator. |
| AWS_COGNITO_ACCESS_KEY_ID     | AWS Access key for making programmatic calls to the AWS SDK. Can be any value using a local emulator.                                                   |
| AWS_COGNITO_SECRET_ACCESS_KEY | AWS Secret access key for making programmatic calls to the AWS SDK. Can be any value using a local emulator.                                            |
| AWS_COGNITO_ENDPOINT          | Entry point for the AWS Cognito service. It should point to the local emulator.                                                                         |

## Common Questions

```
Q: From where do I get my user pool id?
A: It can be retrieved from .cognito/db/local_[POOL_LIST_ID].json.
```

```
Q: From where do I get my client id?
A: It can be retrieved from .cognito/db/clients.json. Each client is made for an specific user pool.
```

# Useful documentation

- Amazon Cognito documentation: https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html
- Cognito Local documentation: https://github.com/jagregory/cognito-local
- Congito Identity Provider SDK: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cognito-identity-provider/index.html
- Integration with NestJS: https://dev.to/fstbraz/authentication-with-aws-cognito-passport-and-nestjs-part-i-23ki
