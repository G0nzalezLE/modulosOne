import { useUsuarios } from '../hooks/useUsuarios';
import { Usuario } from '../interfaces/reqRes';


export const Usuarios = () => {

  const { usuarios, paginaSiguiente,
    pasinaAnterior} = useUsuarios();
  const renderItems = ({id,first_name,last_name,email,avatar}:Usuario)=>{
    return(
      <tr key={id.toString()}>
        <td>
          <img 
            src={avatar} 
            alt={first_name}
            style={{
              width:35,
              borderRadius:100
            }}
            />
        </td>
        <td>{first_name}  {last_name}</td>
        <td>{email}</td>
      </tr>
    )
  }

  return (
    <>
      <h3>Uuario</h3>
      <table className="table ">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>nombre</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {
            usuarios.map(renderItems)
          }
        </tbody>
      </table>
      <button 
        className="btn btn-primary"       
        onClick={paginaSiguiente}
        >
        Next
      </button>

      <button
        className="btn btn-primary"
        onClick={pasinaAnterior}
      >
        Anterior
      </button>



    </>
  )
}
