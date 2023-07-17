import useProductInfo from "../../../hooks/useProductInfo";
import { useNavigate } from "react-router-dom";
import { Container, Content, Details, DeleteButton } from "./style";

import delete_button from "../../../assets/images/delete_button.svg";
import useAuth from "../../../hooks/useAuth";

import API from "../../../services/api";

export default function Products({ productsList, setProductOperation }) {

  const { auth } = useAuth();
  const { getProductPageInfo } = useProductInfo();
  const navigate = useNavigate();

  function productPage(product, zeroQuantity) {

    if (!zeroQuantity) {
      getProductPageInfo(product);
      navigate(`../product-page/${product._id}`);
    }
  }

  function deleteProduct(product) {

    if (!window.confirm("Tem certeza de que quer excluir este produto?")) {
      return;
    }

    API.deleteProductById(product._id, auth.token)
      .then(() =>{
        setProductOperation(true);
        navigate("/home")
      })
      .catch(err => alert(err.message));
  }

  return (
    <Container>
      {productsList.map(product => {
        const zeroQuantity = (product.quantity <= 0) ? true : false; 
        const productOwner = (auth.userID === product.userID) ? true : false;
        return (
          <Content 
            key={product._id} 
            title={product.title}
            zeroquantity={zeroQuantity.toString()}
            onClick={() => productPage(product, zeroQuantity)}
          >
            <img src={product.image} />
            <Details>
              <h2>{product.title}</h2>
              <h3>R$ {product.value.toFixed(2).replace(".", ",")}</h3>
            </Details>
            {productOwner &&      
              <DeleteButton onClick={() => deleteProduct(product)}>
                <img src={delete_button} />
              </DeleteButton>
            }
          </Content>
        )})}
    </Container>
  );
}