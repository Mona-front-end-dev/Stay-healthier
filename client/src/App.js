import './App.css';
import Navigation from './pages/partials/Navigation';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
//Redux
import { Provider } from 'react-redux';
import store from './store';




function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <Container>
          <Alert />
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login /> } />
            <Route exact path="/" element={<Landing />} />
          </Routes>
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
