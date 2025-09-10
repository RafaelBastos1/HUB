// src/components/layout/Navbar.js
import { Link } from 'react-router-dom'
import Container from './Container'

import styles from './Navbar.module.css'
import logo from '../img/logo.ico'


function Navbar() {
  return (
    <nav className={styles.navbar}>
   
     <Link to="/">
        <img src={logo} className={styles.logo} alt="Hub" />
      </Link>
     
    
      <ul className={styles.list}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/servico">Serviço</Link></li>
        <li><Link to="/meuperfil">Meu Perfil</Link></li>
        <li><Link to="/cadastrocliente">Cadastro Cliente</Link></li>
         <li> <Link to="/cadastroprestador">Cadastro Prestador</Link></li>
        <li><Link to="/contato">Contato</Link></li>
     
      </ul>

   
      
    </nav>
  );
}

export default Navbar;