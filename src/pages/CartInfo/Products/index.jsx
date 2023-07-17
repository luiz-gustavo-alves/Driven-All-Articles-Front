import { Container, Content, LeftContent, RightContent, TopContent, BottomContent } from "./style";

export default function Products({ products }) {

  return (
    <Container>
      {products.map((product) => (
        <Content key={product._id}>

          <LeftContent>
            <img src={product.image} />
          </LeftContent>
  
          <RightContent>
            <TopContent>
              <h2>{product.title}</h2>
            </TopContent>

            <BottomContent>
              <h3>R$ {product.value.toFixed(2).replace(".", ",")}</h3>
            </BottomContent>
          </RightContent>
        </Content>
      ))}
    </Container>
  )
}