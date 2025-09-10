import { useEffect, useState } from 'react'
import styles from './MeuPerfil.module.css'   
import LinkButton from './layout/LinkButton'  

function MeuPerfil() {
  const [usuario, setUsuario] = useState(null)
  const [editando, setEditando] = useState(false)
  const [erro, setErro] = useState('')
  const [mensagem, setMensagem] = useState('')

  useEffect(() => {
    document.body.style.backgroundColor = '#FFDE59'
    return () => { document.body.style.backgroundColor = 'white' }
  }, [])


useEffect(() => {
  // Dados de exemplo para teste
  const data = {
    nome: "Patrícia Oliveira",
    email: "patricia@email.com",
    telefone: "11999999999",
    tipo: "cliente", // ou "fornecedor"
    cpf: "12345678901",
    cnpj: "",
    profissao: "",
    descricao: "",
    endereco: "Rua Exemplo, 123",
    cidade: "Recife",
    estado: "PE"
  };
  setUsuario(data);
}, []);


  // Buscar dados do usuário logado
  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const res = await fetch('/api/usuario') // substitua pela rota real da sua API
        const data = await res.json()
        setUsuario(data)
      } catch (err) {
        console.error('Erro ao buscar usuário:', err)
        setErro('Não foi possível carregar os dados do usuário.')
      }
    }
    fetchUsuario()
  }, [])

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value })
  }

  const handleSalvar = async () => {
    setErro('')
    setMensagem('')
    try {
      const res = await fetch('/api/usuario', {
        method: 'PUT', // atualiza os dados
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(usuario)
      })
      if (!res.ok) throw new Error('Erro ao salvar os dados')
      setMensagem('Dados salvos com sucesso!')
      setEditando(false)
    } catch (err) {
      console.error(err)
      setErro('Erro ao salvar os dados.')
    }
  }

  if (!usuario) return <p>Carregando...</p>

  return (
    <div className={styles.profileContainer}>
      <h2>Meu Perfil</h2>

      <div className={styles.profileCard}>
        <p>
          <strong>Nome:</strong>{' '}
          {editando ? (
            <input
              type="text"
              name="nome"
              value={usuario.nome}
              onChange={handleChange}
            />
          ) : (
            usuario.nome
          )}
        </p>

        <p>
          <strong>Email:</strong>{' '}
          {editando ? (
            <input
              type="email"
              name="email"
              value={usuario.email}
              onChange={handleChange}
            />
          ) : (
            usuario.email
          )}
        </p>

        <p>
          <strong>Telefone:</strong>{' '}
          {editando ? (
            <input
              type="tel"
              name="telefone"
              value={usuario.telefone}
              onChange={handleChange}
            />
          ) : (
            usuario.telefone
          )}
        </p>

        {usuario.tipo === 'cliente' && (
          <p>
            <strong>CPF:</strong>{' '}
            {editando ? (
              <input
                type="text"
                name="cpf"
                value={usuario.cpf}
                onChange={(e) =>
                  setUsuario({ ...usuario, cpf: e.target.value.replace(/\D/g, '').slice(0, 11) })
                }
                maxLength="11"
              />
            ) : (
              usuario.cpf
            )}
          </p>
        )}

        {usuario.tipo === 'fornecedor' && (
          <>
            <p>
              <strong>CNPJ:</strong>{' '}
              {editando ? (
                <input
                  type="text"
                  name="cnpj"
                  value={usuario.cnpj}
                  onChange={(e) =>
                    setUsuario({ ...usuario, cnpj: e.target.value.replace(/\D/g, '').slice(0, 14) })
                  }
                  maxLength="14"
                />
              ) : (
                usuario.cnpj
              )}
            </p>
            <p>
              <strong>Profissão:</strong>{' '}
              {editando ? (
                <input
                  type="text"
                  name="profissao"
                  value={usuario.profissao}
                  onChange={handleChange}
                />
              ) : (
                usuario.profissao
              )}
            </p>
            <p>
              <strong>Descrição:</strong>{' '}
              {editando ? (
                <textarea
                  name="descricao"
                  value={usuario.descricao}
                  onChange={handleChange}
                  rows="3"
                />
              ) : (
                usuario.descricao
              )}
            </p>
          </>
        )}

        <p>
          <strong>Endereço:</strong>{' '}
          {editando ? (
            <input
              type="text"
              name="endereco"
              value={usuario.endereco}
              onChange={handleChange}
            />
          ) : (
            usuario.endereco
          )}
        </p>

        <p>
          <strong>Cidade:</strong>{' '}
          {editando ? (
            <input
              type="text"
              name="cidade"
              value={usuario.cidade}
              onChange={handleChange}
            />
          ) : (
            usuario.cidade
          )}
        </p>

        <p>
          <strong>Estado:</strong>{' '}
          {editando ? (
            <input
              type="text"
              name="estado"
              value={usuario.estado}
              onChange={handleChange}
              maxLength="2"
            />
          ) : (
            usuario.estado
          )}
        </p>
      </div>

      {erro && <p className={styles.errorMessage}>{erro}</p>}
      {mensagem && <p className={styles.successMessage}>{mensagem}</p>}

      <div className={styles.buttonContainer}>
        {editando ? (
          <LinkButton to="#" text="Salvar" variant="primary" onClick={handleSalvar} />
        ) : (
          <LinkButton to="#" text="Editar Perfil" variant="primary" onClick={() => setEditando(true)} />
        )}
        <LinkButton to="/login" text="Voltar" variant="secondary" />
      </div>
    </div>
  )
}

export default MeuPerfil
