import './App.css';
import Navigation from './pages/partials/Navigation';
import Landing from './components/layout/Landing';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <Navigation />
      <Container>
        <Landing />
      </Container>
    </>
  );
}

export default App;
