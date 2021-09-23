import { useState } from 'react';

export const useForm = (formulario:any) => {

  const [state, setState] = useState(formulario);
  
  
  const onChange = (value: string, campo: string) => {
    setState({
      ...state,
      [campo]: value
    });
  }


  return{
    ...state,
    formulario: state,
    onChange
  }
}

