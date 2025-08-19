import React, { useState, useEffect } from 'react'
import styles from './CadastroPrestador.module.css'

const CadastroPrestador = () => {
  // Campos pessoais
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cpf, setCpf] = useState('')
  const [endereco, setEndereco] = useState('')
  const [cidade, setCidade] = useState('')
  const [estado, setEstado] = useState('')
  const [cep, setCep] = useState('')
  
  // Campos profissionais
  const [profissao, setProfissao] = useState('')
  const [experiencia, setExperiencia] = useState('')
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

  const handleEspecialidadeChange = (especialidade) => {
    if (especialidades.includes(especialidade)) {
      setEspecialidades(especialidades.filter(esp => esp !== especialidade))
    } else {
      setEspecialidades([...especialidades, especialidade])
    }
  }

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

    console.log('=== DADOS DO PRESTADOR ===')
    console.log('Nome:', nome)
    console.log('Email:', email)
    console.log('Telefone:', telefone)
    console.log('CPF:', cpf)
    console.log('Endereço:', endereco)
    console.log('Cidade:', cidade)
    console.log('Estado:', estado)
    console.log('CEP:', cep)
    console.log('Profissão:', profissao)
    console.log('Experiência:', experiencia)
    console.log('Descrição:', descricao)
    console.log('Especialidades:', especialidades)

    setMensagem('Prestador de serviço cadastrado com sucesso!')

    
    setNome('')
    setEmail('')
    setTelefone('')
    setCpf('')
    setEndereco('')
    setCidade('')
    setEstado('')
    setCep('')
    setProfissao('')
    setExperiencia('')
    setDescricao('')
    setEspecialidades([])
    setSenha('')
    setConfirmarSenha('')
    setConfirmarEmail('')
  }

  return (
    <div className={styles['form-container']}>
      <h2>Cadastro de Prestador de Serviço</h2>
      <h3>Informações Pessoais</h3>

      <form onSubmit={handleSubmit}>
        {/* Campos pessoais */}
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
        <div className={styles['form-group']}>
          <label htmlFor="endereco">Endereço:</label>
          <input
            type="text"
            placeholder='Rua, número, complemento'
            id="endereco"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            required
          />
        </div>

        <div className={styles['form-row']}>
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
            <label htmlFor="cep">CEP:</label>
            <input
              type="text"
              placeholder='00000-000'
              id="cep"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              required
              maxLength="9"
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
          <label htmlFor="experiencia">Anos de Experiência:</label>
          <input
            type="number"
            placeholder='Ex: 5'
            id="experiencia"
            value={experiencia}
            onChange={(e) => setExperiencia(e.target.value)}
            required
            min="0"
            max="50"
          />
        </div>



        <div className={styles['form-group']}>
          <label>Especialidades (múltipla escolha):</label>
          <div className={styles['checkbox-group']}>
            <label className={styles['checkbox-label']}>
              <input
                type="checkbox"
                checked={especialidades.includes('instalacao')}
                onChange={() => handleEspecialidadeChange('instalacao')}
              />
              Instalação
            </label>
            <label className={styles['checkbox-label']}>
              <input
                type="checkbox"
                checked={especialidades.includes('manutencao')}
                onChange={() => handleEspecialidadeChange('manutencao')}
              />
              Manutenção
            </label>
            <label className={styles['checkbox-label']}>
              <input
                type="checkbox"
                checked={especialidades.includes('reparo')}
                onChange={() => handleEspecialidadeChange('reparo')}
              />
              Reparo
            </label>
            <label className={styles['checkbox-label']}>
              <input
                type="checkbox"
                checked={especialidades.includes('limpeza')}
                onChange={() => handleEspecialidadeChange('limpeza')}
              />
              Limpeza
            </label>
            <label className={styles['checkbox-label']}>
              <input
                type="checkbox"
                checked={especialidades.includes('pintura')}
                onChange={() => handleEspecialidadeChange('pintura')}
              />
              Pintura
            </label>
          </div>
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

        <button type="submit">Cadastrar Prestador de Serviço</button>
      </form>

      {erro && <p className={styles['error-message']}>{erro}</p>}
      {mensagem && <p className={styles['success-message']}>{mensagem}</p>}
    </div>
  )
}

export default CadastroPrestador
