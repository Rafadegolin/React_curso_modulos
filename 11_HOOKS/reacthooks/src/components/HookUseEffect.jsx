import{ useEffect, useState } from 'react'

const HookUseEffect = () => {
    // 1 - useEffect, sem dependências
    // executa sempre que o componente renderiza
    useEffect(() => {
        console.log("Estou sendo executado!");
    });

    const [number, setNumber] = useState(1);

    const changeSomething = () => {
        setNumber(number + 1);
    };

    // 2 - array de dependênciais vazio
    // executa uma vez só no loading do componente
    useEffect(() => {
        console.log("Serei executado apenas umas vez");
    }, []);

    // 3 - utilizando o array de dependências
    //  executa somente quando é alterado o state do anotherNumber
    const [anotherNumber, setAnotherNumber] = useState(0);

    useEffect(() => {
        if (anotherNumber > 0) {
            console.log("Sou executado apenas quando o anotherNumber muda");
        }
    }, [anotherNumber]);

    // 4 - cleanup do useEffect
    useEffect(() => {
        // const timer = setTimeout(() => {
        //     console.log("Hello World");
        //     setAnotherNumber(anotherNumber + 1);
        // }, 2000);
        // return () => clearTimeout(timer);
    }, [anotherNumber]);

  return (
    <div>
        <h2>useEffect</h2>
        <p>Número: {number}</p>
        <button onClick={changeSomething}>Executar</button>
        <p>Another Number: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar anotherNumber</button>
        <hr />
    </div>
  );
};

export default HookUseEffect;