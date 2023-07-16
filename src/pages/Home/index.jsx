import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Products from "./Products";
import { Container, Footer, ScrollButton } from "./style";

export default function Home() {

  const [productsList, setProductsList] = useState(null);
  const [scrollCounter, setScrollCounter] = useState(0);

  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {

    if (!auth.token) {
      navigate("/");
    }

    const limit = scrollCounter === 0 ? "" : `?limit=${scrollCounter}`;

    const url = `http://localhost:5000/home${limit}`;
    const config = {headers: {Authorization: `Bearer ${auth.token}`}};

    axios.get(url, config)
      .then(res => setProductsList(res.data))
      .catch(err => console.log(err.message));

  }, [scrollCounter, ]);

  console.log(productsList);

  if (productsList === null) {
    return <h1>Carregando..</h1>
  }

  return (
    <Container>
      <Products productsList={productsList} />

      <Footer>
        <ScrollButton 
          title="Ver mais produtos"
          onClick={() => setScrollCounter(scrollCounter + 1)}
        >{"Ver mais produtos"}
        </ScrollButton>
      </Footer>
    </Container>
  );
}