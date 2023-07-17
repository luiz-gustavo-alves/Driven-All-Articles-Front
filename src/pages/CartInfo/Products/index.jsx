import delete_button from "../../../assets/images/delete_button.svg";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

import { Container, Content, LeftContent, RightContent, TopContent, BottomContent, DeleteButton } from "./style";
import API from "../../../services/api";

export default function Products({ products, setCartOperation }) {

  const { auth } = useAuth();
  const navigate = useNavigate();

  function deleteProduct(product) {

    if (!window.confirm("Tem certeza de que quer excluir este produto do carrinho?")) {
      return;
    }

    API.deleteProductInCart(product.productID, auth.token)
      .then(() =>{
        setCartOperation(true);
        navigate("/cart-info")
      })
      .catch(err => alert(err.message));
  }

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
          <DeleteButton onClick={() => deleteProduct(product)}>
            <img src={delete_button} />
          </DeleteButton>
        </Content>
      ))}
    </Container>
  )
}