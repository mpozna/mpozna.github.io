import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Navigation from './Components/Navigation';
import Resume from './Pages/Resume';

const style = {
  fontFamily: 'arial'
}

const routes = [
  { path: '/', element: <Home /> },
  { path: '/projects', element: <Projects /> },
  { path: '/contact', element: <Contact /> },
  { path: '/resume', element: <Resume /> },
]

function App() {
  return (
    <div className="App" style={style}>
      <Navigation />
      <Routes>
        {routes.map(route => (
          <Route {...route} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
