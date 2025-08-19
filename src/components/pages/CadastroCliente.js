import React, { useState, useEffect } from 'react'
import styles from './CadastroCliente.module.css'

const CadastroCliente = () => {
  // Campos básicos
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cpf, setCpf] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')

  
  // Campos de acesso
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [confirmarEmail, setConfirmarEmail] = useState('')
  
  const [mensagem, setMensagem] = useState('')
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

    // Validação de email
    if (email !== confirmarEmail) {
      setErro('Os emails não coincidem!')
      return
    }

    // Validação de senha
    if (senha !== confirmarSenha) {
      setErro('As senhas não coincidem!')
      return
    }

    if (senha.length < 6) {
      setErro('A senha deve ter pelo menos 6 caracteres!')
      return
    }

    // Validação de CPF
    if (cpf.length !== 11) {
      setErro('CPF deve ter 11 dígitos!')
      return
    }

    // Validação de idade (mínimo 18 anos)
    if (dataNascimento) {
      const hoje = new Date()
      const nascimento = new Date(dataNascimento)
      let idade = hoje.getFullYear() - nascimento.getFullYear()
      const mesAtual = hoje.getMonth()
      const mesNascimento = nascimento.getMonth()
      
      if (mesAtual < mesNascimento || (mesAtual === mesNascimento && hoje.getDate() < nascimento.getDate())) {
        idade--
      }
      
      if (idade < 18) {
        setErro('Você deve ter pelo menos 18 anos para se cadastrar!')
        return
      }
    }

    console.log('=== DADOS DO CLIENTE ===')
    console.log('Nome:', nome)
    console.log('Email:', email)
    console.log('Telefone:', telefone)
    console.log('CPF:', cpf)
    console.log('Data de Nascimento:', dataNascimento)


    setMensagem('Cliente cadastrado com sucesso!')

    // Limpar todos os campos
    setNome('')
    setEmail('')
    setTelefone('')
    setCpf('')
    setDataNascimento('')

    setSenha('')
    setConfirmarSenha('')
    setConfirmarEmail('')
  }

  return (
    <div className={styles['form-container']}>
      <h2>Cadastro de Cliente</h2>
      
      <h3>Informações Pessoais</h3>

      <form onSubmit={handleSubmit}>
        {/* Campos básicos */}
        <div className={styles['form-group']}>
          <label htmlFor="nome">Nome Completo:</label>
          <input
            type="text"
            placeholder='Insira seu nome completo'
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            placeholder='Insira seu CPF (apenas números)'
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value.replace(/\D/g, ''))}
            required
            maxLength="11"
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="dataNascimento">Data de Nascimento:</label>
          <input
            type="date"
            id="dataNascimento"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            required
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder='Insira seu E-mail'
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="confirmarEmail">Confirmar Email:</label>
          <input
            type="email"
            placeholder='Confirme seu E-mail'
            id="confirmarEmail"
            value={confirmarEmail}
            onChange={(e) => setConfirmarEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="tel"
            placeholder='Insira seu telefone'
            id="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
        </div>



        {/* Campos de acesso */}
        
        <div className={styles['form-group']}>
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            placeholder='Crie uma senha (mín. 6 caracteres)'
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            minLength="6"
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="confirmarSenha">Confirmar Senha:</label>
          <input
            type="password"
            placeholder='Confirme sua senha'
            id="confirmarSenha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            required
          />
        </div>



        <button type="submit">
          Cadastrar Cliente
        </button>
      </form>

      {erro && <p className={styles['error-message']}>{erro}</p>}
      {mensagem && <p className={styles['success-message']}>{mensagem}</p>}
    </div>
  )
}

export default CadastroCliente
