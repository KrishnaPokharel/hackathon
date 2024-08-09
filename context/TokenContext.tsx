"use client"
import axios from 'axios';
import { access } from 'fs';
import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface TokenContextState {
  token: string | null;
  expireDate:Date | null;
  fetchToken: () => Promise<void>;
}

const TokenContext = createContext<TokenContextState | undefined>(undefined);


const fetchToken = async () => {
  try {
    let token;

    const tokenData =  await Promise.all([
      axios({
        method: 'get',
        url: 'https://api.speedrent.com/v3/help-centre-token',
        headers: {
          'X-Device-ID': '0',
          'X-OS-Version': '0',
          'Content-Type': 'application/json',
          'Authorization': '37IRTU4S7OY05W6EFBET03TOL90_RFT_'
        },
        data:{}
      })
    ])

    return await tokenData[0].data;
  } catch (error:any) {
    console.error('Error fetching token:', error.response ? error.response.data : error.message);
  }
};


const TokenProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [expireDate, setExpireDate] = useState<Date | null>(null);


  

  useEffect(() => {
    const initializeTokens = async () => {
      const tokens = await fetchToken();
      setToken(tokens.accessToken)
      setExpireDate(new Date(tokens.expiryDateTime))
    };
         
    initializeTokens();
  }, []);

  
  return (
    <TokenContext.Provider value={{ token, expireDate ,fetchToken}}>
      {children}
    </TokenContext.Provider>
  );
}

export { TokenContext, TokenProvider };