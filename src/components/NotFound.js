import '../styles/layout/NotFoundText.scss';
import Footer from './Footer';
function NotFound() {
  return (
    <>
      <div className="text">
        Oops! No se ha encontrado ningun personaje, vuelve a buscar.
      </div>
      <Footer/>
    </>
  );
}

export default NotFound;
