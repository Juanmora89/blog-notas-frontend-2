// import logo from './logo.svg'; -- not using this now, but leaving for future use
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogList from './components/BlogList';
// import BloglAdd from './components/BlogAdd';
// import BlogEdit from './components/BlogEdit';

function App() {
  return (
    <Router>
      <div>
        <h1>Spin the Black Circle!</h1>
        <div>Managing Your Blog List</div>
        <Routes>
          <Route path="/" element={<BlogList />} />
          {/* <Route path="/add" element={<BloglAdd />} />
          <Route path="/edit/:blogNotasId" element={<BlogEdit />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
