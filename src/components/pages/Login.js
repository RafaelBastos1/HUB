import { useState, useEffect } from 'react';
import logo from '../pages/img/logo-removebg.png'
import LinkButton from './layout/LinkButton'
import styles from './Login.module.css'

function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')

  // Aplica o fundo amarelo só nessa página
  useEffect(() => {
    document.body.style.backgroundColor = '#FFDE59' // amarelo claro
    return () => {
      document.body.style.backgroundColor = 'white' // reseta ao sair da página
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setErro('')

    // Validação básica
    if (!email || !senha) {
      setErro('Por favor, preencha todos os campos!')
      return
    }

    // Aqui você pode adicionar a lógica de autenticação
    console.log('Tentativa de login:', { email, senha })
    
    // Simulação de login bem-sucedido
    setErro('')
    alert('Login realizado com sucesso!')
  }

  return (
    <section className={styles.loginSection}>
      <div className={styles.loginContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
        
        <h2 className={styles.title}>Entrar</h2>
        
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha"
              required
            />
          </div>
          
          {erro && <p className={styles.errorMessage}>{erro}</p>}
          
          <button type="submit" className={styles.loginButton}>
            Entrar
          </button>
        </form>
        
        <div className={styles.cadastroSection}>
          <p>Não tem uma conta?</p>
          <LinkButton to="/selecionar-cadastro" text="Cadastrar" />
        </div>
      </div>
    </section>
  )
}

export default Login

