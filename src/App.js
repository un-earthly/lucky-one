import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCoffee} />
function App() {
  return (
    <div className="App">
      <h1 className='has-background-dark'>
        Cleande up
        <FontAwesomeIcon icon={faCoffee} />
      </h1>

    </div>
  );
}

export default App;
