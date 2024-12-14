import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './components/Routing';

function App() {
  return (
    
    <div>
      <BrowserRouter>
        <Routing/>
      </BrowserRouter>
    </div>
      
  );
}

export default App;