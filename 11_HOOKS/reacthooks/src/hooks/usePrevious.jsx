import { useEffect, useRef, useDebugValue } from "react";

export const usePrevious = (value) => {
    const ref = useRef();

    // useDebugValue - depurar o código utilizando a extensão React Dev Tools
    useDebugValue("--- CUSTOM HOOK E USEDEBUGVALUE ---");
    useDebugValue("O número anterior é: " + value);

    useEffect(() => {
        ref.current = value;
    });

    return ref.current;
};