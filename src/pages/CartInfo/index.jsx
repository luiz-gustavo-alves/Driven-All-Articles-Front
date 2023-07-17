import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useCartInfo from "../../hooks/useCartInfo";
import Products from "./Products";
import { useNavigate } from "react-router-dom";
import { Container, Content, Title, CheckoutContainer, Checkout, Default } from "./style";

import API from "../../services/api";

export default function CartInfo() {

  const [ cartData, setCartData ] = useState([]);
  const [cartOperation, setCartOperation] = useState(false);
  const { getCartInfo } = useCartInfo();
  const { auth } = useAuth();
  const navigate = useNavigate();

  function checkoutPage() {
    navigate("/checkout");
  }

  useEffect(() => {

    if (!auth.token) {
      navigate("/");
    }

    API.getShoppingCartInfo(auth.token)
      .then(res => {
        setCartData(res.data);
        getCartInfo(true);
      })
      .catch(err => alert(err.response.data));

  }, [cartOperation, ])

  const emptyCart = (Object.keys(cartData).length === 0) ? true : false;

  return (
    <Container>
      <Title>
        <h2>Compras Realizadas</h2>
      </Title>

      <Content>
        {!emptyCart &&
          <> 
            <Products products={cartData} setCartOperation={setCartOperation} />
            <CheckoutContainer>
              <Checkout onClick={checkoutPage}>
                {"Fazer Checkout"}
              </Checkout>
            </CheckoutContainer>
          </>
        }

        {emptyCart && 
          <Default>
            <h2>Não há produtos ainda!</h2>
          </Default>
        }
      </Content>
    </Container>
  )
}