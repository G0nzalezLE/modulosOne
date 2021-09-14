import { useCounter } from '../hooks/useCounter';

export const ContadorConHook = () => {

  const {valor,acumula}= useCounter();

  return (
    <>
      <h3>Contador con hook
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
