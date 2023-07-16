import useProductInfo from "../../../hooks/useProductInfo";
import { useNavigate } from "react-router-dom";
import { Container, Content, Details } from "./style";

export default function Products({ productsList }) {

  const { getProductPageInfo } = useProductInfo();
  const navigate = useNavigate();

  function productPage(product) {
    getProductPageInfo(product);
    navigate(`../product-page/${product._id}`);
  }

  return (
    <Container>
      {productsList.map(product => (
        <Content 
          key={product._id} 
          title={product.title}
          onClick={() => productPage(product)}
        >
          <img src={product.image} />
          <Details>
            <h2>{product.title}</h2>
            <h3>R$ {product.value.toFixed(2).replace(".", ",")}</h3>
          </Details>
        </Content>
      ))}
    </Container>
  );
}