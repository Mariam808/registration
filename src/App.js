import './App.css';
import Navigation from "./componet/navigation";
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
         <Navigation/>
        </BrowserRouter>
    </div>
  );
}

export default App;
