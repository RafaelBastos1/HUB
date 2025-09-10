import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules' //pode colocar o Autoplay

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import styles from './Servico.module.css' 
import eletricista from '../pages/img/eletricista.png'
import pintor from '../pages/img/pintor.png'
import pedreiro from '../pages/img/pedreiro.png'

import LinkButton from './layout/LinkButton'


const Servico = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Serviços Disponíveis</h2>

      <Swiper
        modules={[Navigation, Pagination]} //pode ser add aqui um Autoplay para o slide ir automatico
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        //autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        <SwiperSlide >
          <div className={styles.card}>
             <img src={pedreiro} alt="Pedreiro" />
             <div className={styles.texto}>
            <h3>Pedreiro</h3>
            <p>Construção e correção residenciais e comerciais.</p>
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.card}>
            <img src={pintor} alt="Pintor" />
           
             <div className={styles.texto}>
            <h3>Pintura</h3>
            <p>Correção e manuntenção de pintura.</p>
          </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className={styles.card}>
          <img src={eletricista} alt="Eletricista" />
          
          <div className={styles.texto}>
           <h3>Eletricista</h3>
           <p>Serviço completo para sua casa ou empresa.</p>
          </div>
        </div>
</SwiperSlide>
  </Swiper>
   
   <div className={styles.secaoAtividades}>
        <h2 className={styles.titulo}>Minhas Atividades</h2>
       
        <div className={styles.botoes}>
          <LinkButton to="/agendadoform" text="Agendar Serviço" />
       
        </div>
    
     <div className={styles.botoes}>
         <LinkButton to="/servico" text="Pagamentos" />
    </div>
    
     <div className={styles.botoes}>
         <LinkButton to="/servico" text="Mensagens" />
    </div>
    
    </div>
      
 </div>
 

)
}

export default Servico
