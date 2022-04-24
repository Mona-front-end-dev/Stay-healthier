import './App.css';
import Navigation from './pages/partials/Navigation';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login /> } />
          <Route exact path="/" element={<Landing />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
