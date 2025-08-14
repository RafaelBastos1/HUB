import { useEffect } from 'react';
import styles from '../projeto/AgendadoForm.module.css'
import Input from '../form/input';
import Select from '../form/Select';

function AgendadoForm() {
   
 useEffect(() => {
    document.body.style.backgroundColor = '#FFDE59' // amarelo claro
    return () => {
      document.body.style.backgroundColor = 'white' // reseta ao sair da página
    }
  }, [])

    return (
    
    <form  className={styles.form_ag}>
        <Input  
         type="text"
         text="Nome" 
         nome="name" 
         placeholder="insira seu nome."
        
        />

        <Input
         type="text" 
         text="CPF"
         nome="number"
         placeholder="Insira seu CPF"
        />
     
       
       
        <h5>Escolha uma data para sua visita</h5>
       
    
        <select>
            <option>Selecione o tipo de serviço:</option>
              <option>Eletricista</option>
             <option>Pedreiro</option>
             <option>Pintor</option>
             
        </select>
          
          <div> 
            <input  type='submit' value='Adicionar serviço'/>     
          </div>



    </form>
    
    
    
    )
}

export default AgendadoForm