interface Persona{
  nombreCOmpleto:string;
  nombre:string;
  edad:number;
  direccion: Direccion
}

interface Direccion{
  pais: string,
  casaNo: number
}

export const ObjetosLiterales = () => {
  const persona:Persona = {    
    nombreCOmpleto:'Fernando F',
    nombre:'Fernando',
    edad:35,
    direccion:{
      pais:'Canadá',
      casaNo:5
    }
  }
  return (
    <>
      <h3>Objetos Literales</h3>

      <code>
        <pre>
          {JSON.stringify(persona,null,2)}
        </pre>
      </code>
    </>
  )
}
