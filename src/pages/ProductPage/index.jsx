import useProductInfo from "../../hooks/useProductInfo";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Container, Content , LeftContent, RightContent, TopContent, DetailsContainer,  ValueContainer } from "./style";
import { QuantityContainer, ShoppingCartButton, Description } from "./style";

export default function ProductPage() {

  const { auth } = useAuth();
  const { productInfo } = useProductInfo();
  const navigate = useNavigate();

  const value = `R$ ${productInfo.value.toFixed(2).replace(".", ",")}`;

  function checkoutPage() {
    navigate(`../checkout/${productInfo._id}`);
  }

  useEffect(() => {
    if (!auth.token) {
      navigate("/");
    }
  }, []);

  return (
    <Container>
      <Content>
        <LeftContent>
          <img src={productInfo.image} />
        </LeftContent>

        <RightContent>
          <div>
            <TopContent>
              <DetailsContainer>
              <h2 title="Título">{productInfo.title}</h2>
                <ValueContainer>
                  <h3 title={value}>{value}</h3>
                </ValueContainer>
              </DetailsContainer>
            </TopContent>

            <div>
              <QuantityContainer>
                <p>Quantidade: <span>{productInfo.quantity}</span></p>
              </QuantityContainer>
            </div>
          </div>

          <div>
            <ShoppingCartButton onClick={checkoutPage}>
              Adicionar Ao Carrinho
            </ShoppingCartButton>
          </div>
        </RightContent>
      </Content>
      
      <Description>
        <p>Descrição Do Produto</p>
        <h3>{productInfo.description}</h3>
      </Description>
    </Container>
  )
}