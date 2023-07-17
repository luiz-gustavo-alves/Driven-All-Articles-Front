import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import { Container, Title, CheckoutItems, InfoContainer, FinishContainer, FinishOrderButton } from "./style";

import API from "../../services/api";

export default function Checkout() {

  const [ cartData, setCartData ] = useState(null);
  const navigate = useNavigate();
  const { auth } = useAuth();

  function finishOrder() {
    
    API.finishOrder(auth.token)
      .then(() => navigate("/home"))
      .catch((err) => alert(err.message));
  }

  useEffect(() => {

    if (!auth.token) {
      navigate("/");
    }

    API.getShoppingCartInfo(auth.token)
      .then(res => setCartData(res.data))
      .catch(err => alert(err.response.data));

  }, [])

  if (cartData === null) {
    return <h1>Carregando...</h1>
  }

  function getTotal() {

    if (cartData.length === 0) {
      navigate("/home");
  
    } else {
      
      let sum = 0;
      cartData.forEach(data => sum += data.value);
      sum = `R$ ${sum.toFixed(2).replace(".", ",")}`;

      return sum;
    }
  }

  const total = getTotal();

  return (
    <Container>
      <Title>
        <h2>Checkout</h2>
      </Title>
      <CheckoutItems>
        <InfoContainer>
          <h1>Informações da compra</h1>
          <h2>Quantidade de Produtos: <span>{cartData.length}</span></h2>
          <h2>Total do(s) pedido(s): <span>{total}</span></h2>
        </InfoContainer>
      </CheckoutItems>
      <FinishContainer>
        <FinishOrderButton onClick={finishOrder}>
          {"Finalizar Pedido"}
        </FinishOrderButton>
      </FinishContainer>
    </Container>
    )
} 