import React, { useState, useEffect } from 'react'
import styles from './CadastroCliente.module.css'


const CadastroCliente = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cpf, setCpf] = useState('')
  const [mensagem, setMensagem] = useState('')

  // Aplica o fundo amarelo só nessa página
  useEffect(() => {
    document.body.style.backgroundColor = '#FFDE59' // amarelo claro

    return () => {
      document.body.style.backgroundColor = 'white' // reseta ao sair da página
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('Nome:', nome)
    console.log('Email:', email)
    console.log('Telefone:', telefone)
    console.log('Cpf:', cpf)

    setMensagem('Cadastro realizado com sucesso!')

    setNome('')
    setEmail('')
    setTelefone('')
    setCpf('')
  }

  return (
    <div className={styles['form-container']}>
     
  
      <h2>Cadastro</h2>
      <h3>Informações Pessoais</h3>

      <form onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text" placeholder='Insira seu nome completo'
            id="nome"
            value={nome}
            /* onCharge servi para capturar o que o usuáro digitae salva no estado do React
            O evento(E), (target) representa o input onde ocorreu o evento
            O (e) => é o arrow(função anônima) o (e) é o evendo do input */
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text" placeholder='Insira seu cpf'
            id="cpf"
            value={cpf}
            
            onChange={(e) => setCpf(e.target.value)}
            required maxLength="11"
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="email">Email:</label>
          <input
            type="email" placeholder='Insira seu E-mail'
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="tel" placeholder='Insira seu telefone'
            id="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
        </div>

        <button type="submit">Cadastrar</button>
      </form>

      {mensagem && <p className={styles['success-message']}>{mensagem}</p>}
    </div>
  )
}

export default CadastroCliente
