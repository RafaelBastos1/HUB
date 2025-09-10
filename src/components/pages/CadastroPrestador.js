import React, { useState, useEffect } from 'react'
import styles from './CadastroPrestador.module.css'
import LinkButton from './layout/LinkButton'

const CadastroPrestador = () => {
  // Campos pessoais
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [endereco, setEndereco] = useState('')
  const [cidade, setCidade] = useState('')
  const [estado, setEstado] = useState('')
  const [cep, setCep] = useState('')
  const[numero, setNumero] =useState('')
  const[complemento, setComplemento] =useState('')
  
  // Campos profissionais
  const [profissao, setProfissao] = useState('')
  //const [experiencia, setExperiencia] = useState('')
  const [descricao, setDescricao] = useState('')
  const [especialidades, setEspecialidades] = useState([])
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [confirmarEmail, setConfirmarEmail] = useState('')
  
  const [mensagem, setMensagem] = useState('')
  const [erro, setErro] = useState('')

  // Aplica o fundo amarelo só nessa página
  useEffect(() => {
    document.body.style.backgroundColor = '#FFDE59' 

    return () => {
      document.body.style.backgroundColor = 'white'
    }
  }, [])

  // Buscar endereço pela API ViaCEP
  useEffect(() => {
    const buscarEndereco = async () => {
      const cepLimpo = cep.replace(/\D/g, '')
      if (cepLimpo.length === 8) {
        try {
          const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
          const data = await response.json()

          if (data.erro) {
            setErro('CEP não encontrado!')
            setEndereco('')
            setCidade('')
            setEstado('')
            setNumero('')
          } else {
            setErro('')
            setEndereco(data.logradouro || '')
            setCidade(data.localidade || '')
            setEstado(data.uf || '')
            setNumero(data.complemento || '')
          }
        } catch (error) {
          setErro('Erro ao buscar CEP!')
        }
      }
    }

    buscarEndereco()
  }, [cep])

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

    // Validação de CNPJ
    if (cnpj.length !== 14) {
      setErro('Cnpj deve ter 14 dígitos!')
      return
    }

    console.log('=== DADOS DO PRESTADOR ===')
    console.log('Nome:', nome)
    console.log('Email:', email)
    console.log('Telefone:', telefone)
    console.log('Cnpj:', cnpj)
    console.log('Endereço:', endereco)
    console.log('Cidade:', cidade)
    console.log('Estado:', estado)
    console.log('CEP:', cep)
    console.log('Numero:', numero)
    console.log('Profissão:', profissao)
    console.log('Complemento:',complemento)
    // console.log('Experiência:', experiencia)
    console.log('Descrição:', descricao)
    console.log('Especialidades:', especialidades)

    setMensagem('Prestador de serviço cadastrado com sucesso!')

    // Resetando os campos
    setNome('')
    setEmail('')
    setTelefone('')
    setCnpj('')
    setEndereco('')
    setCidade('')
    setEstado('')
    setCep('')
    setNumero('')
    setComplemento('')
    setProfissao('')
   // setExperiencia('')
    setDescricao('')
    setEspecialidades([])
    setSenha('')
    setConfirmarSenha('')
    setConfirmarEmail('')
  }

  return (
    <div className={styles['form-container']}>
   
      <form onSubmit={handleSubmit}>
        {/* Campos pessoais */}
        <h2>Cadastro de Prestador de Serviço</h2>
        <h3>Informações Pessoais</h3>
       
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
          <label htmlFor="cnpj">CNPJ:</label>
          <input
            type="text"
            placeholder='Insira seu CNPJ (apenas números)'
            id="cnpj"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value.replace(/\D/g, ''))}
            required
            maxLength="14"
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

        {/* Campos de endereço */}
        <div className={styles['form-row']}>
         
          <div className={styles['form-group']}>
            <label htmlFor="cep">CEP:</label>
            <input
              type="text"
              placeholder='CEP'
              id="cep"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              required
              maxLength="9"
            />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="estado">Estado:</label>
            <input
              type="text"
              placeholder='UF'
              id="estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              required
              maxLength="2"
            />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="cidade">Cidade:</label>
            <input
              type="text"
              placeholder='Sua cidade'
              id="cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              required
            />
          </div>
           
        </div>

   <div className={styles['form-row']}>
          <div className={styles['form-group']}>
            <label htmlFor="numero">N°:</label>
            <input
              type="text"
              placeholder='Número'
              id="num"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              required
            />
        </div>
          <div className={styles['form-group']}>
            <label htmlFor="Complemento">Complemento:</label>
            <input
              type="text"
              placeholder='Complemento'
              id="complemento"
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
              required
            
            />
          </div>

          {/* <div className={styles['form-group']}>
            <label htmlFor="cidade">Cidade:</label>
            <input
              type="text"
              placeholder='Sua cidade'
              id="cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              required
            />
          </div> */}
           
        </div>

       <div className={styles['form-group']}>
           
        <div className={styles['form-group']}>
          <label htmlFor="endereco">Endereço:</label>
          <input
            type="text"
            placeholder='Endereço completo'
            id="endereco"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            required 
            />
       </div>
      </div>
       
        {/* Campos profissionais */}
           <h3>Informações Profissionais</h3>
        <div className={styles['form-group']}>
          <label htmlFor="profissao">Profissão/Especialidade:</label>
          <select
            id="profissao"
            value={profissao}
            onChange={(e) => setProfissao(e.target.value)}
            required
          >
            <option value="">Selecione sua profissão</option>
            <option value="eletricista">Eletricista</option>
            <option value="pedreiro">Pedreiro</option>
            <option value="pintor">Pintor</option>
            <option value="encanador">Encanador</option>
            <option value="jardineiro">Jardineiro</option>
            <option value="diarista">Diarista</option>
            <option value="marceneiro">Marceneiro</option>
            <option value="tecnico">Técnico de Informática</option>
            <option value="limpeza">Limpeza</option>
            <option value="outro">Outro</option>
          </select>
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="descricao">Descrição dos Serviços:</label>
          <textarea
            placeholder='Descreva os serviços que você oferece, suas especialidades e experiência...'
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
            rows="4"
          />
        </div>

        {/* Campos de senha */}
        <h3>Dados de Acesso</h3>
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

        <div className={styles.buttonContainer}>
          <LinkButton to="/cadastro" text="Cadastrar" variant="primary" />
          <LinkButton to="/login" text="Voltar" variant="secondary" />
      </div>
     
      </form>

      {erro && <p className={styles['error-message']}>{erro}</p>}
      {mensagem && <p className={styles['success-message']}>{mensagem}</p>}

    
    </div>
  )
}

export default CadastroPrestador
