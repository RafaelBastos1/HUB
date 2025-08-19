import styles from './Home.modules.css'
import logo from './img/logo-removebg.png'
import LinkButton from './layout/LinkButton'
import { useEffect } from 'react';


function Home() {

  useEffect(() => {
    document.body.style.backgroundColor = '#FFDE59' // amarelo claro
    return () => {
      document.body.style.backgroundColor = 'white' // reseta ao sair da página
    }
  }, [])

   return (
  <section>
       
    <h1>Bem-vindo </h1>
    <h2>Encontre quem pode te ajudar.</h2>
    <img src={logo} alt="Logo" />
  
  <div className="botoes">
    <LinkButton to="/cadastrocliente" text="Eu sou cliente" />
   <LinkButton to="/cadastroprestador" text="Eu ofereço serviço" />
</div>
 </section>
)


}
export default (Home)