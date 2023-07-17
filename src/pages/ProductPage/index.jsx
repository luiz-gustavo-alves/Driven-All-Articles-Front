import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useProductInfo from "../../hooks/useProductInfo";
import useCartInfo from "../../hooks/useCartInfo";

import { Container, Content , LeftContent, RightContent, TopContent, DetailsContainer,  ValueContainer } from "./style";
import { QuantityContainer, ShoppingCartButton, UserInfo, LeftUserInfo, RightUserInfo, Description } from "./style";

import API from "../../services/api";

export default function ProductPage() {

  const [productOwnerInfo, setProductOwnerInfo] = useState(null);
  const { auth } = useAuth();
  const { productInfo } = useProductInfo();
  const { getCartInfo } = useCartInfo();
  const navigate = useNavigate();

  const value = `R$ ${productInfo.value.toFixed(2).replace(".", ",")}`;

  function cartInfoPage() {

    API.buyProduct(productInfo._id, auth.token)
      .then((res) => {
        getCartInfo({ ...res.data });
        navigate(`/cart-info`);
      })
      .catch(err => alert(err));
  }

  useEffect(() => {

    if (!auth.token) {
      navigate("/");
    }

    API.getUserInfoById(productInfo.userID, auth.token)
      .then(res => setProductOwnerInfo(res.data))
      .catch(err => alert(err.response.data));

  }, []);

  if (productOwnerInfo === null) {
    return <h1>Carregando...</h1>
  }

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
            <ShoppingCartButton onClick={cartInfoPage}>
              Adicionar Ao Carrinho
            </ShoppingCartButton>
          </div>
        </RightContent>
      </Content>

      <UserInfo>
        <LeftUserInfo>
          <img src={productOwnerInfo.image} />
          <h2>{productOwnerInfo.name}</h2>
        </LeftUserInfo>
        <RightUserInfo>
          <h2>Quantidade de produtos à venda {productOwnerInfo.productsCount}</h2>
        </RightUserInfo>
      </UserInfo>
      
      <Description>
        <p>Descrição Do Produto</p>
        <h3>{productInfo.description}</h3>
      </Description>
    </Container>
  )
}