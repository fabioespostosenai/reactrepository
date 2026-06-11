import ProjetoImagens from './components/ProjetoImagens'
import './App.css'
//Importar os componentes do Swiper
import { Swiper, SwiperSlide} from 'swiper/react'
//Importar os módulos necessários (Setas e Bolinhas)
import {Navigation, Pagination, EffectCube} from 'swiper/modules'
//Importar o CSS do Swiper (Obrigatório para funcionar o carrossel)
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-cube'

function App() {
  //Criação do Array para receber as imagens em um BD temporário.
const numeros=[1, 2, 3, 4, 5, 6]
  return (
    <>
    <div className='container-flex'>
      {/* O Swiper substitui a div container-flex */}
      <Swiper
        modules={[Navigation, Pagination, EffectCube]}
        effect={'cube'}
        grabCursor={true}

        spaceBetween={20} //Espaço entre os cards
        slidesPerView={1} //Quantos cards aparecem por slide
        navigation //Ativa as setas laterais
        pagination={{clickable: true}} //Ativa as bolinhas abaixo das imagens
        breakpoints={{
          600: {slidesPerView: 2},
          1024:{slidesPerView: 3},
        }}
        >
      
    {numeros.map((n) => (

      //Cada imagem no map deve estar dentro de um Slide
      <SwiperSlide key={n}>
        <ProjetoImagens 
          
          imagem={`/p${n}.jpg`}
          nome={`Projeto ${n}`}
        />
        </SwiperSlide>
    ) )}
      </Swiper>
     </div>
    </>
  )
}

export default App
