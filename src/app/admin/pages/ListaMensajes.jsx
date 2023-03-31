import { NavBar, TablaMensaje, FiltrosMensaje } from '../components';
import '../styles/ListaMensajesStyle.css'

export const ListaMensajes = () => {
  return (
    <>
      <NavBar />
      <div className='container'>
        <FiltrosMensaje />
        <hr />
        <br />
        <TablaMensaje />
      </div>
    </>
  )
}
