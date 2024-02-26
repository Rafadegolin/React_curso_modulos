import React from 'react'

import { useState } from 'react';

const HookTeste = () => {
    const [num, setNum] = useState(0);

  return (
    <div>
        <h2>TESTE DO FRANCAO</h2>
        <p>O numero é {num}</p>
        <button onClick={() => setNum(num + 1)}>Somar</button>
        <hr />
    </div>
  );
};

export default HookTeste;