import { NavBar, TablaMensaje, FiltrosMensaje } from '../components';
import '../styles/ListaMensajesStyle.css'

export const ListaMensajes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
