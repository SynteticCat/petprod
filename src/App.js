import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from "./pages/MainPage/MainPage";
import NavigationBar from './components/NavigationBar/NavigationBar.js';
import ControlPanel from './components/ControlPanel/ControlPanel';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Route exact path="/" component={MainPage} />        
        <ControlPanel />
      </Router>
    </div>
  );
}

export default App;
