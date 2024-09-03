import Product from "../Product";
import { Wrapper, List, Title } from "./styles";
type Props = {
  title: string;
  background: "primary" | "black";
};

const ProductsList = ({ title }: Props) => (
  <Wrapper>
    <div className="wrapper">
      <Title>{title}</Title>
      <List>
        <Product />
        <Product />
        <Product />
        <Product />
      </List>
    </div>
  </Wrapper>
);

export default ProductsList;
