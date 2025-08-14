import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import Servico from './components/pages/Servico';
import MeuPerfil from './components/pages/MeuPerfil';
import CadastroCliente from './components/pages/CadastroCliente';
import Login from './components/pages/Login';
import Agendamento from './components/pages/Agendamento';

import Container from './components/pages/layout/Container';
import Navbar from './components/pages/layout/Navbar'
import Footer from './components/pages/layout/Footer'





function App() {
  return (
    <Router>
     <Navbar />
        <div className="main-content">
          <Container customClass="min-height">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/servico" element={<Servico />} />
              <Route path="/agendadoform" element={<Agendamento />} />
              <Route path="/meuperfil" element={<MeuPerfil />} />
              <Route path="/cadastrocliente" element={<CadastroCliente />} />
             <Route path="/login" element={<Login />} /></Routes>
          </Container>
          
        </div>
  <Footer />

   
    </Router>
  );
}

export default App;
