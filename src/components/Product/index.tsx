import Tag from "../Tag";
import { CardProduct, TitleProduct, DescProduct, Infos } from "./styles";

type Props = {
  title: string;
  category: string;
  system: string;
  description: string;
  infos: string[];
  image: string;
};

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image,
}: Props) => {
  return (
    <CardProduct>
      <img src={image} alt="{title}" />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <TitleProduct>{title}</TitleProduct>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <DescProduct>{description}</DescProduct>
    </CardProduct>
  );
};

export default Product;
