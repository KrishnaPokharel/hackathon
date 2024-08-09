"use client"
import { useContext } from 'react';
import { TokenContext } from '../context/TokenContext';

const useAuthFetch = () => {
  const { token, expireDate,fetchToken}:any = useContext(TokenContext);

  console.log(token)
  const checkTokenExpiration = async () => {
    if (token) {
      //  const expireDate = new Date(token)

       if(expireDate<=new Date()){
        console.log("expired")
        const generateToken=await fetchToken() 

       }
    }
    return token;
  };

  const authFetch = async (url: string, options: RequestInit = {}) => {
    const validToken = await checkTokenExpiration();
    console.log(validToken)
    const authOptions = {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Zoho-oauthtoken ${validToken}`,
      },
    };
    const response = await fetch(url, authOptions);
    return response;
  };

  return authFetch;
};

export default useAuthFetch;