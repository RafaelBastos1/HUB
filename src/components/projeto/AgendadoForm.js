import { useState, useEffect } from 'react'
import styles from '../projeto/AgendadoForm.module.css'
import Input from '../form/input'

function AgendadoForm() {
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [data, setData] = useState('')
  const [servico, setServico] = useState('')

  useEffect(() => {
    document.body.style.backgroundColor = '#FFDE59' // amarelo claro
    return () => {
      document.body.style.backgroundColor = 'white' // reseta ao sair da página
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!nome || !cpf || !data || !servico) {
      alert('Preencha todos os campos antes de agendar!')
      return
    }

    // Simulação de cadastro/agendamento
    console.log('=== AGENDAMENTO DE SERVIÇO ===')
    console.log('Nome:', nome)
    console.log('CPF:', cpf)
    console.log('Data:', data)
    console.log('Serviço:', servico)

    alert(`Serviço "${servico}" agendado para ${nome} na data ${data}`)

    // Limpar formulário
    setNome('')
    setCpf('')
    setData('')
    setServico('')
  }

  return (
    <form className={styles.form_ag} onSubmit={handleSubmit}>
      <Input
        type="text"
        text="Nome"
        nome="name"
        placeholder="Insira seu nome."
        value={nome}
        handleOnChange={(e) => setNome(e.target.value)}
      />

      <Input
        type="text"
        text="CPF"
        nome="cpf"
        placeholder="Insira seu CPF"
        value={cpf}
        handleOnChange={(e) => setCpf(e.target.value.replace(/\D/g, '').slice(0,11))}
      />

      <h5>Escolha a data para sua visita</h5>
      <input
        type="date"
        value={data}
        onChange={(e) => setData(e.target.value)}
        required
      />

      <select
        value={servico}
        onChange={(e) => setServico(e.target.value)}
        required
      >
        <option value="">Selecione o tipo de serviço:</option>
        <option value="Eletricista">Eletricista</option>
        <option value="Pedreiro">Pedreiro</option>
        <option value="Pintor">Pintor</option>
      </select>

      <div className={styles.button} >
       
      <button> Agendar </button>
     
      </div>
    
    </form>
  )
}

export default AgendadoForm
