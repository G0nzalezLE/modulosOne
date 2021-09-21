// import { ObjetosLiterales } from "./typescript/ObjetosLiterales"
// import { Funciones } from "./typescript/Funciones"

import { Usuarios } from "./components/Usuarios";

// import { Contador } from "./components/Contador"
// import { ContadorConHook } from "./components/ContadorConHook"
// import { Login } from "./components/Login";

// import { TiposBasicos } from './typescript/TiposBasicos';
const App = () => {
  return (
    <div className="mt-2">
      <h1>Introducción a TS-React</h1>
      <hr />
      {/* <TiposBasicos /> */}
      {/* <ObjetosLiterales/> */}
      {/* <Funciones/> */}
      {/* <Contador/> */}
      {/* <ContadorConHook/> */}
      {/* <Login/> */}
      <Usuarios/>
    </div>
  )
}




export default App;