import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Footer from "./components/Footer";
import SectionCard from "./components/SectionCard";
import "./components/css/styles.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Form />  
      <SectionCard/>
      <Footer />
    </div>
  );
}

export default App;
