export const ObjetosLiterales = () => {
  const persona = {
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
