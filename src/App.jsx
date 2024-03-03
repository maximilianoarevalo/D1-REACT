import "./App.css";
import Header from "./Header";
import MyCard from "./MyCard";
import Footer from "./Footer";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="title-container">
          <Header title="Adopta un perrito" />
        </div>
        <div className="cards-container">
          <MyCard
            image="https://media.istockphoto.com/id/1619114107/es/foto/lindo-perro-marr%C3%B3n-fondo-aislado-primer-plano-interior.jpg?s=1024x1024&w=is&k=20&c=m5mYFY7m5rk6Q4v3ip3kdLlz1vhJOK-YIj0avEhIXZM="
            name="Rex"
            description="Lleno de energía y listo para jugar. ¡Dale todo tu cariño!"
            text="Pitbull"
            backgroundColor="danger"
          />
          <MyCard
            image="https://media.istockphoto.com/id/1904647184/es/foto/cachorro-con-ojos-grandes-y-hermosos.jpg?s=1024x1024&w=is&k=20&c=vtX0TV-XsTmu71szcwPdKIreba3aO5rMzi7Pu5HhilY="
            name="Toby"
            description="Perrito juguetón e inquieto. Busca tu cariño y protección!"
            text="Mestizo"
            backgroundColor="success"
          />
          <MyCard
            image="https://media.istockphoto.com/id/653003928/es/foto/brutal-red-shiba-inu-perro-sobre-fondo-azul.jpg?s=1024x1024&w=is&k=20&c=UeFfHM3MiUr49r9zYGD4phUAnxEbto1Ayt2SQmK55Bg="
            name="Flo"
            description="Dócil, fiel y amigable perrita. Le gusta salir a caminar!"
            text="Akita Inu"
            backgroundColor="primary"
          />
          <MyCard
            image="https://media.istockphoto.com/id/1551607934/es/foto/perro-golden-retriever-haciendo-truco.jpg?s=2048x2048&w=is&k=20&c=IGmG9pnLcQ9-g12zUq9C4N5xq8N1fynzy_A7uX5RNPk="
            name="Flo"
            description="Amigable y leal. Ama los juegos al aire libres."
            text="Golden Retriever"
            backgroundColor="warning"
          />
        </div>
        <div className="footer-container">
          <Footer />
        </div> 
      </div>
    </>
  );
}

export default App;
