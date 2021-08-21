export const TiposBasicos = () => {
  
  
  
  const nombre:string ='Hola como estas';
  const edad:number  =231;
  const estaActivo:boolean =false;

  const poderes:string[]=[];
  

  
  
  return (
    <>
      <h3>Tipos básicos</h3>
      {nombre} , {edad}, {(estaActivo)?'activo':'no activo'}
      <br />
      {poderes.join(', ')}
    </>
  )
}
