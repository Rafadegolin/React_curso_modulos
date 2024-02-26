import { useLayoutEffect, useState, useEffect } from 'react'

const HookUseLayoutEffect = () => {
    const [name, setName] = useState("Algum nome");

    useEffect(() => {
        console.log("2 - useEffect");
        setName("Mudou de novo!");
    }, []);

    useLayoutEffect(() => {
        console.log("1 - useLayoutEffect");
        setName("Outro nome");
    }, []);

    console.log(name);

  return (
    <div>
        <h2>useLayoutEffects</h2>
        <p>Nome: {name}</p>
        <hr />
    </div>
  );
};

export default HookUseLayoutEffect;