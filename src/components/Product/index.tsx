import Tag from "../Tag";
import { CardProduct, TitleProduct, DescProduct } from "./styles";

const Product = () => {
  return (
    <CardProduct>
      <img src="//placehold.it/222x250" alt="" />
      <TitleProduct>Nome do Jogo</TitleProduct>
      <Tag>Categoria</Tag>
      <Tag>Windows</Tag>

      <DescProduct>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
        ratione.
      </DescProduct>
    </CardProduct>
  );
};

export default Product;
