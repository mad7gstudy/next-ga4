'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { generateRandomString, getRandomStatus } from '../_lib/gen';

type UserType = {
  id: string
  state: string
}

// Contextの型定義
type UserContextType = {
  user: UserType;
  setUser: (value: UserType) => void;
};

// Contextの作成
const UserContext = createContext<UserContextType | undefined>(undefined);

// ProviderのProps型定義
type UserProviderProps = {
  children: ReactNode;
};

// Providerコンポーネント
export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<UserType>({ id: generateRandomString(), state: getRandomStatus() });

  return (
    <UserContext.Provider value={{ user, setUser: setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Contextを利用するためのカスタムフック
export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
