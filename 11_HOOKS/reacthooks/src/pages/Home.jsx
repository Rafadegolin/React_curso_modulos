import React from 'react'

// hooks
import HookUseState from '../components/HookUseState';
import HookUseReducer from '../components/HookUseReducer';
import HookUseEffect from '../components/HookUseEffect';
import HookUseRef from '../components/HookUseRef';
import HookUseCallback from '../components/HookUseCallback';
import HookUseMemo from '../components/HookUseMemo';
import HookUseLayoutEffect from '../components/HookUseLayoutEffect';

//  useContext
import { useContext } from 'react';
import { SomeContext } from '../components/HookUseContext';
import HookUseImperativeHandle from '../components/HookUseImperativeHandle';
import HookCustom from '../components/HookCustom';
import HookTeste from '../components/HookTeste';


const Home = () => {
    const {contextValue} = useContext(SomeContext);

  return (
    <div>
        <HookUseState />
        <HookUseReducer />
        <HookUseEffect />
        <h2>useContext</h2>
        <p>Valor do contexto: {contextValue}</p>
        <hr />
        <HookUseRef />
        <HookUseCallback />
        <HookUseMemo />
        <HookUseLayoutEffect />
        <HookUseImperativeHandle />
        <HookCustom />
        <HookTeste />
    </div>
  );
};

export default Home