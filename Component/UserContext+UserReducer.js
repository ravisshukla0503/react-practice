import React from 'react';
import { useReducer } from 'react';
import ComponentA from './Component/ComponentA'
import ComponentB from './Component/ComponentB'

export const Countcontext=React.createContext();

const intialstate=0;
const reducer =(currentstate,action)=>{
  switch(action){
    case 'increment':
      return (currentstate+1);
    case 'decrement' :
      return (currentstate-1);
    case 'reset' :
      return (intialstate);
      default :
  }
}

function App() {
const [count , setcount]=useReducer(reducer,intialstate);
  return (
    <div>
      
      <Countcontext.Provider valuecount={{valuecount :count , valuesetcount :setcount}}>
        {count}
        <ComponentA />
        <ComponentB />
      </Countcontext.Provider>
    </div>
  )
}

export default App

