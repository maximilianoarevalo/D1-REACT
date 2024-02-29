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
          image="https://media.istockphoto.com/id/1589824836/es/foto/lindo-perro-marr%C3%B3n-que-sonr%C3%ADe-fondo-aislado.jpg?s=2048x2048&w=is&k=20&c=cugHYBPpd4GPQxVgY9vnXj_j6V3lWpZTRANL8CTyM8o="
          name= "Rex"
          description= "Lindo perro marrón"
          text = "Raza"
          backgroundColor = "danger"
        />
        <Footer />
      </div>
    </>
  )
}

export default App
