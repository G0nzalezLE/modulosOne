import { useState } from "react";

export const useCounter = (inicial:number = 10) => {
  const [valor, setValor] = useState<number>(2);

  const acumula = (numero: number) => {
    setValor(valor + numero);
  }

  return {
    valor,
    acumula
  }
}
