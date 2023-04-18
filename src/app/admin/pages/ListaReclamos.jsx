import { NavBar, TablaReclamo, FiltrosReclamo } from '../components';
import { useEffect } from 'react'
export const ListaReclamos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <div className="container">
        <FiltrosReclamo />
        <hr />
        <br />
        <TablaReclamo />
      </div>
    </>
  )
}
