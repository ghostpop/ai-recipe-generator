import {
    CognitoUserPool,
    ICognitoUserPoolData,
  } from 'amazon-cognito-identity-js';
  
  const poolData: ICognitoUserPoolData = {
    UserPoolId: process.env.REACT_APP_USER_POOL_ID as string,
    ClientId: process.env.REACT_APP_CLIENT_ID as string,
  };
  
  export default new CognitoUserPool(poolData);