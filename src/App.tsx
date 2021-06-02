import Home from "./Pages/Home/"
import { Provider } from 'react-redux'
import store from "./store/storeConfig";

function App() {
  return (
      <div className="App">
        <Home/>
      </div>
  );
}

export default App;
