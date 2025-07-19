import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";
import { COGNITO_IDENTITY_POOL_ID, COGNITO_POOL_ID } from "../configs";

export const getAwsCredentials = async (token) => {
  if (!token) {
    throw new Error("JWT token is required for authenticated access");
  }

  try {
    const loginProvider = `cognito-idp.us-east-1.amazonaws.com/${COGNITO_POOL_ID}`;

    return fromCognitoIdentityPool({
      identityPoolId: COGNITO_IDENTITY_POOL_ID,
      logins: {
        // This key should be in the format "cognito-idp.{region}.amazonaws.com/{UserPoolId}"
        [loginProvider]: token,
      },
    });
  } catch (error) {
    console.error("Error getting AWS credentials:", error);
    throw error;
  }
};
