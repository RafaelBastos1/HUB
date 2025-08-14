import styles from './Login.module.css'
import { useEffect } from 'react';
import logo from '../pages/img/logo-removebg.png'
import LinkButton from './layout/LinkButton'



function Login() {

    // Aplica o fundo amarelo só nessa página
  useEffect(() => {
    document.body.style.backgroundColor = '#FFDE59' // amarelo claro
    return () => {
      document.body.style.backgroundColor = 'white' // reseta ao sair da página
    }
  }, [])

    return (
     <section>
        
         <img src={logo} alt="Logo" />
         <div className="botoes">
            <LinkButton to="/cadastrocliente" text="Entrar" />
            <LinkButton to="/cadastrocliente" text="Cadastre-se" />
        </div>
       
     </section>
    )

    
     
}

export default  (Login)

