import React, { useState, useEffect } from 'react'
import styles from './CadastroCliente.module.css'
import LinkButton from './layout/LinkButton'

const CadastroCliente = () => {
  // Campos básicos
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cpf, setCpf] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')
  const [cep, setCep] = useState('')

  // Campos de endereço (faltavam antes)
  const [endereco, setEndereco] = useState('')
  const [cidade, setCidade] = useState('')
  const [estado, setEstado] = useState('')
  const [numero, setNumero] = useState('')

  // Campos de acesso
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [confirmarEmail, setConfirmarEmail] = useState('')


  useEffect(() => {
    document.body.style.backgroundColor = '#FFDE59' 

    return () => {
      document.body.style.backgroundColor = 'white'
    }
  }, [])


  // Buscar endereço pelo CEP
  useEffect(() => {
    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => response.json())
        .then((data) => {
          if (!data.erro) {
            setEndereco(data.logradouro || '')
            setCidade(data.localidade || '')
            setEstado(data.uf || '')
            setNumero(data.complemento || '')
          } else {
            alert('CEP não encontrado!')
          }
        })
        .catch(() => {
          alert('Digite o CEP correto')
        })
    }
  }, [cep])

  // Enviar formulário
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Nome:', nome)
    console.log('Email:', email)
    console.log('Confirmar Email:', confirmarEmail)
    console.log('Telefone:', telefone)
    console.log('CPF:', cpf)
    console.log('Data de Nascimento:', dataNascimento)
    console.log('CEP:', cep)
    console.log('Endereço:', endereco)
    console.log('Número/Complemento:', numero)
    console.log('Cidade:', cidade)
    console.log('Estado:', estado)
    console.log('Senha:', senha)
    console.log('Confirmar Senha:', confirmarSenha)
  }

  return (
    <div className={styles['form-container']}>
  
      <form onSubmit={handleSubmit} className={styles.form}>
            <h2>Cadastro de Cliente</h2>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Confirmar Email:
          <input
            type="email"
            value={confirmarEmail}
            onChange={(e) => setConfirmarEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Telefone:
          <input
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
        </label>

        <label>
          CPF:
          <input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
        </label>

        <label>
          Data de Nascimento:
          <input
            type="date"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            required
          />
        </label>

        <label>
          CEP:
          <input
            type="text"
            value={cep}
            onChange={(e) => setCep(e.target.value.replace(/\D/g, ''))}
            maxLength="8"
            required
          />
        </label>

        <label>
          Endereço:
          <input
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            required
          />
        </label>

        <label>
          Número/Complemento:
          <input
            type="text"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
        </label>

        <label>
          Cidade:
          <input
            type="text"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            required
          />
        </label>

        <label>
          Estado:
          <input
            type="text"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            required
          />
        </label>

        <label>
          Senha:
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </label>

        <label>
          Confirmar Senha:
          <input
            type="password"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            required
          />
        </label>
        
      <div className={styles.buttonContainer}>
          <LinkButton to="/cadastro" text="Cadastrar" variant="primary" />
          <LinkButton to="/login" text="Voltar" variant="secondary" />
      </div>
     
      </form>
       
   
   
    </div>
  )
}

export default CadastroCliente
