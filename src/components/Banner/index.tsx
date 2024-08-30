import {Imagem, Title, Precos} from "./styles"
import bannerImg from "../../assets/images/banner-homem-aranha.png"
import Tag from "../Tag"
import Button from "../Button"

const Banner = () => 
      <Imagem style={{backgroundImage: `url(${bannerImg})`}}>
        <div className="wrapper">
          
          <Tag size="big">Destaque do Dia</Tag>
          <div>
       <Title>
        Marvel's Spider-Man: Miles Morales PS4 & PS5
       </Title>
       <Precos>
       De <span>R$ 250,00</span><br /> por apenas R$ 99,90
       </Precos>
          </div>
          <div>
       <Button type="link" 
       to="/produto"
        title="Clique aqui e Aproveite a oferta" >
        Aproveitar
       </Button>
          </div>
        </div>


      </Imagem>
         
  


export default Banner
