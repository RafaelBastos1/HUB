import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./Servico.module.css";
import eletricista from "../pages/img/eletricista.png";
import pintor from "../pages/img/pintor.png";
import pedreiro from "../pages/img/pedreiro.png";

import LinkButton from "./layout/LinkButton";

const servicesData = [
  {
    id: 1,
    title: "Pedreiro",
    description: "Construção e correção residenciais e comerciais.",
    image: pedreiro,
  },
  {
    id: 2,
    title: "Pintura",
    description: "Correção e manutenção de pintura.",
    image: pintor,
  },
  {
    id: 3,
    title: "Eletricista",
    description: "Serviço completo para sua casa ou empresa.",
    image: eletricista,
  },
];

const Servico = () => {
  const [search, setSearch] = useState("");

  const filteredServices = servicesData.filter(
    (service) =>
      service.title.toLowerCase().includes(search.toLowerCase()) ||
      service.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Serviços Disponíveis</h2>

      {/* Campo de Pesquisa */}
      <input
        type="text"
        placeholder="Buscar serviço..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.searchInput}
      />

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <SwiperSlide key={service.id}>
              <div className={styles.card}>
                <img src={service.image} alt={service.title} />
                <div className={styles.texto}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            Nenhum serviço encontrado.
          </p>
        )}
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
  );
};

export default Servico;
