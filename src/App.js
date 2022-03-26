import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Questions from './Components/Questions/Questions';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Shop />
      <Questions />
    </div>
  );
}

export default App;
