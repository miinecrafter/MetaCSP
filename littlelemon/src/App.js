//import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import LemonLogo from './images/lemonlogo.png';
import BookingTable from './Components/BookingTable';
import HomePage from './Components/HomePage';
import BookingStatus from './Components/BookingStatus';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="head-cont">
          <nav className="navigation">
              <Link to="/" className="nav-item">Home</Link>
              {/* <Link to="/" className="nav-item">Menu</Link>
              <Link to="/" className="nav-item">Rating</Link> */}
              <Link to="/book" className="nav-item">Book a Table</Link>
          </nav>
          <img src={LemonLogo} className="lemonlogo-header" />
        </div>
      </header>
      <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book/*" element={<BookingTable />} />
            <Route path="/success" element={<BookingStatus status="Form submitted successfully!" />} />
            <Route path="/failed" element={<BookingStatus status="Form failed. Please answer all fields correctly." />} />
          </Routes>
      </main>
      <footer>
        <div className="footer-info">
          <p>Copyright Little Lemon 2023-2024</p>
          <p>Support: littlelemon@gmail.com</p>
          <p>twitter: @littlelemon</p>
          <p>Instagram: l1ttlel3mon</p>
        </div>
        <img src={LemonLogo} />
      </footer>
    </div>
  );
}

export default App;