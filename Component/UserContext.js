//useConntext : pass a prop from one component to another nested components directly

import React from 'react'

export const UserContext=React.createContext();

const Provider=UserContext.Provider
const Consumer=UserContext.consumer

export {Provider ,Consumer};
