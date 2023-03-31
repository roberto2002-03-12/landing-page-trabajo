import { NavBar, TablaReclamo, FiltrosReclamo } from '../components';

export const ListaReclamos = () => {
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
