
import './App.css';
import Cosmetics from './components/Cosmetics/Cosmetics';

// the things we import are called modules
//react divides the js codes into module and we can import them when needed
//if there is no ./ that means they are node module
// ./ modules are in our own file

function App() {
  return (
    <div className="App">
      <Cosmetics />
    </div>
  );
}

export default App;
