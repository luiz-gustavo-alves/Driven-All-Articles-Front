import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

import Products from "./Products";
import { Container, Title, Footer, ScrollButton } from "./style";

import API from "../../services/api";

export default function Home() {

  const [productsList, setProductsList] = useState(null);
  const [scrollProducts, setScrollProducts] = useState({ counter: 0, length: 0, maxLength: false });
  const { auth } = useAuth();
  const navigate = useNavigate();

  function updateScroll(newState) {
    setScrollProducts(currentState => ({ ...currentState, ...newState }));
  }

  useEffect(() => {

    if (!auth.token) {
      navigate("/");
    }

    const limit = scrollProducts.counter === 0 ? "" : `?limit=${scrollProducts.counter}`;

    API.getProductList(limit, auth.token)
      .then(res => {
        
        const productsLength = res.data.length;
        if (productsLength !== scrollProducts.length) {
          updateScroll({ length: productsLength });
        } else {
          updateScroll({ maxLength: true });
        }

        setProductsList(res.data);
      })
      .catch(err => console.log(err.message));

  }, [scrollProducts.counter, ]);

  if (productsList === null) {
    return <h1>Carregando..</h1>
  }

  return (
    <Container>
      <Title>Produtos Recentes</Title>

      <Products productsList={productsList} />

      <Footer hidden={scrollProducts.maxLength}>
        <ScrollButton 
          title="Ver mais produtos"
          onClick={() => updateScroll({ counter: scrollProducts.counter + 1 })}
        >{"Ver mais produtos"}
        </ScrollButton>
      </Footer>
    </Container>
  );
}