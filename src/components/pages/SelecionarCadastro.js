import { useEffect } from 'react';
import logo from './img/logo-removebg.png'
import LinkButton from './layout/LinkButton'
import styles from './SelecionarCadastro.module.css'

function SelecionarCadastro() {
    // Aplica o fundo amarelo só nessa página
  useEffect(() => {
    document.body.style.backgroundColor = '#FFDE59' // amarelo claro
    return () => {
      document.body.style.backgroundColor = 'white' // reseta ao sair da página
    }
  }, [])

    return (
     <section className={styles.container}>
        <div className={styles.content}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <h2 className={styles.title}>Escolha o tipo de cadastro</h2>
            
            <div className={styles.options}>
                <div className={styles.option}>
                    <h3>Cliente</h3>
                    <p>Cadastre-se para contratar serviços</p>
                    <LinkButton to="/cadastrocliente" text="Cadastrar como Cliente" />
                </div>
                
                <div className={styles.option}>
                    <h3>Prestador de Serviços</h3>
                    <p>Cadastre-se para oferecer serviços</p>
                    <LinkButton to="/cadastroprestador" text="Cadastrar como Prestador" />
                </div>
            </div>
            
            <div className={styles.backButton}>
                <LinkButton to="/login" text="Voltar" />
            </div>
        </div>
     </section>
    )
}

export default SelecionarCadastro
