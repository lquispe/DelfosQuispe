import './App.css';
import NavBar from './components/NavBar';
import ItemListContainar from './components/ItemListContainer';


const App = () => {
  return (
    <div>
      <header>
          <NavBar></NavBar>
      </header>
      <section className="categ_sec">
        <ItemListContainar greeting="Nuestros Libros" />
      </section>
    </div>
  );
}

export default App;
