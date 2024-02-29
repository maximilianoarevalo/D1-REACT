import './App.css'
import Header from './Header'
import MyCard from './MyCard'
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <div>
        <Header 
          title="Adopta un perrito"
        />
        <MyCard 
          image="https://media.istockphoto.com/id/1619114107/es/foto/lindo-perro-marr%C3%B3n-fondo-aislado-primer-plano-interior.jpg?s=1024x1024&w=is&k=20&c=m5mYFY7m5rk6Q4v3ip3kdLlz1vhJOK-YIj0avEhIXZM="
          name= "Rex"
          description= "Lindo perro marrón"
          text = "Raza"
          backgroundColor = "danger"
        />
        <MyCard 
          image="https://media.istockphoto.com/id/1904647184/es/foto/cachorro-con-ojos-grandes-y-hermosos.jpg?s=1024x1024&w=is&k=20&c=vtX0TV-XsTmu71szcwPdKIreba3aO5rMzi7Pu5HhilY="
          name= "Toby"
          description= "Perrito juguetón e inquieto"
          text = "Raza"
          backgroundColor = "success"
        />
        <MyCard 
          image="https://media.istockphoto.com/id/653003928/es/foto/brutal-red-shiba-inu-perro-sobre-fondo-azul.jpg?s=1024x1024&w=is&k=20&c=UeFfHM3MiUr49r9zYGD4phUAnxEbto1Ayt2SQmK55Bg="
          name= "Flo"
          description= "Dócil, fiel y amigable perrita"
          text = "Raza"
          backgroundColor = "primary"
        />
        <Footer />
      </div>
    </>
  )
}

export default App
