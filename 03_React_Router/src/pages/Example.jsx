import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Components
const Home = () => <h2 className='font-bold text-2xl'>This is Home page</h2>;
const About = () => <h2 className='font-bold text-xl'>About</h2>;

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home Pages</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
