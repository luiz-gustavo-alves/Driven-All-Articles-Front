import { Container, Content, Details } from "./style";

export default function Products({ productsList }) {

  function handleClick(product) {
    console.log(product);
  }

  return (
    <Container>
      {productsList.map(product => (
        <Content 
          key={product._id} 
          title={product.title}
          onClick={() => handleClick(product)}
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