import React from 'react'

export const UserContext=React.createContext();

const Provider=UserContext.Provider
const Consumer=UserContext.consumer

export {Provider ,Consumer};
