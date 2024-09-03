import Product from "../Product";
import { Wrapper, List, Title } from "./styles";
export type Props = {
  title: string;
  background: "primary" | "black";
};

const ProductsList = ({ title, background }: Props) => (
  <Wrapper background={background}>
    <div className="wrapper">
      <Title>{title}</Title>
      <List>
        <Product
          category="Ação"
          description="teste"
          image="//placehold.it/220x250"
          infos={["-10%", "R$ 150"]}
          system="windows"
          title="Nome do Jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="//placehold.it/220x250"
          infos={["-10%", "R$ 150"]}
          system="windows"
          title="Nome do Jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="//placehold.it/220x250"
          infos={["-10%", "R$ 150"]}
          system="windows"
          title="Nome do Jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="//placehold.it/220x250"
          infos={["-10%", "R$ 150"]}
          system="windows"
          title="Nome do Jogo"
        />
      </List>
    </div>
  </Wrapper>
);

export default ProductsList;
