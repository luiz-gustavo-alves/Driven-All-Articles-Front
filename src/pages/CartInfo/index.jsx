import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useCartInfo from "../../hooks/useCartInfo";
import Products from "./Products";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import { Container, Content, Title, Default, Loader } from "./style";

import API from "../../services/api";

export default function CartInfo() {
  
  const { cartOperation, setCartOperation } = useState(false);
  const { cartInfo, getCartInfo } = useCartInfo();
  const { auth } = useAuth();
  const navigate = useNavigate();
  

  useEffect(() => {

    if (!auth.token) {
      navigate("/");
    }

    API.getShoppingCartInfo(auth.token)
      .then(res => getCartInfo(res.data))
      .catch(err => alert(err.message));

  }, [cartOperation , ])

  const emptyCart = (Object.keys(cartInfo).length === 0) ? true : false;

  return (
    <Container>
      <Title>
        <h2>Compras Realizadas</h2>
      </Title>

      <Content>
        {!emptyCart &&
          <Products products={cartInfo} />
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