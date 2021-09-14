import {useState}from 'react';
export const Contador = () => {

  const [valor, setValor] = useState<number>(2);

  const acumula=(numero:number)=>{
    setValor(valor + numero);
  }

  return (
    <>
      <h3>Contador
        <small>{valor}</small>
      </h3>

      <button
        className="btn btn-primary"
        onClick={ ()=>acumula(1) }
      >
        +1
      </button>

      &nbsp;


      <button
        className="btn btn-primary ml-2"
        onClick={ () => acumula(-1) }
      >
        -1
      </button>

    </>
  )
}
