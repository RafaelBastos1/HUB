import styles from './Agendamento.module.css'

import AgendadoForm from '../projeto/AgendadoForm'


function Agendamento () {
    return(
  
    <div className = {styles.agenda_container}>
       <h1>Agende seu serviço.</h1>
   
      <AgendadoForm />
 </div>



   ) 
}

export default Agendamento