import { NavBar, TablaCategoria } from "../components"

export const ListaCategoria = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <div className="container">
        <TablaCategoria />
      </div>
    </>
  )
}
