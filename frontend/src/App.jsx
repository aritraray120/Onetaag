import Customers from "./components/Customers/Customers";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Reach from "./components/Reach/Reach";
import Teams from "./components/Teams/Teams";
import Works from "./components/Works/Works";
import styles from "./App.module.css";

function App() {
  return (

    <div>
      <Header />

      <div className={styles['main-content']}>
        <Hero />
        <Teams />
        <Works />
        <Customers />
        <Reach />

        <Footer />
      </div>
    </div>


  );
}

export default App;