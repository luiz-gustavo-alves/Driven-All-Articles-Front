import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCartInfo from "../../hooks/useCartInfo";
import Products from "./Products";

import { Oval } from "react-loader-spinner";
import { Container, Content, Title, Footer, ScrollButton, Loader } from "./style";

import API from "../../services/api";

export default function Home() {

  const [productsList, setProductsList] = useState(null);
  const [productOperation, setProductOperation] = useState(false);
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

    setTimeout(() => {

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
      .catch(err => alert(err.response));
    }, 500);

  }, [scrollProducts.counter, productOperation,  ]);

  if (productsList === null) {
    return (
      <Loader>
        <Oval
          height="200"
          width="200"
          color="#217cff"
          ariaLabel='oval-loading'
          secondaryColor="#217cff"
          strokeWidth={2}
          strokeWidthSecondary={2}
          visible={true}
        />
      </Loader>
    );
  }

  return (
    <Container>
      <Title>
        <h2>Produtos Recentes</h2>
      </Title>

      <Content>
        <Products productsList={productsList} setProductOperation={setProductOperation} />

        <Footer hidden={scrollProducts.maxLength}>
          <ScrollButton 
            title="Ver mais produtos"
            onClick={() => updateScroll({ counter: scrollProducts.counter + 1 })}
          >{"Ver mais produtos"}
          </ScrollButton>
        </Footer>
      </Content>
    </Container>
  );
}