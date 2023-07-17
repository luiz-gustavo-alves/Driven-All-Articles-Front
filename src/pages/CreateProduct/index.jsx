import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { ThreeDots } from "react-loader-spinner";
import { Content, Title, Container, Form, Loader } from "./style";

import API from "../../services/api";

export default function CreateProduct() {

  const [formData, setFormData] = useState({ title: "", description: "", value: "", quantity: "", image: ""});
  const [disabled, setDisable] = useState(false);
  const { auth } = useAuth();
  const navigate = useNavigate();

  function updateForm(e) {
    setFormData({...formData, [e.target.name]: e.target.value });
  }

  function submitForm(e) {
    e.preventDefault();

    const { title, description, image } = formData;

    let { value, quantity } = formData;
    value = Number(value.replace(",", "."));
    quantity = Number(quantity.replace(",", "."));

    setDisable(true);

    setTimeout(() => {
      API.createProduct({ title, description, value, quantity, image }, auth.token)
      .then(() => navigate("/home"))
      .catch((err) => {
        alert(err.message);
        setDisable(false);
      });
    }, 1000);

  }

  useEffect(() => {
    if (!auth.token) {
      navigate("/");
    }
  }, [])

  return (
    <Container>
      <Title>
        <h2>Formulário para Criação de Produto</h2>
      </Title>

      <Content>
        <Form onSubmit={submitForm}>
          <input 
              placeholder="Título" 
              name="title" 
              required 
              value={formData.title} 
              onChange={updateForm} 
              disabled={disabled} />

          <input 
            placeholder="Descrição" 
            name="description" 
            required 
            value={formData.description} 
            onChange={updateForm} 
            disabled={disabled} />

          <input 
            placeholder="Valor" 
            name="value" 
            required 
            value={formData.value} 
            onChange={updateForm} 
            disabled={disabled} />

          <input 
            placeholder="Quantidade" 
            name="quantity" 
            required 
            value={formData.quantity} 
            onChange={updateForm} 
            disabled={disabled} />

          <input 
            placeholder="Link da imagem" 
            name="image" 
            required 
            value={formData.image} 
            onChange={updateForm} 
            disabled={disabled} />

          <button type='submit' disabled={disabled} >
            {disabled ? "" : "Entrar"}
          </button>
          <Loader>
            <ThreeDots 
              width={70} 
              height={70} 
              border-radius={4.5}
              color="#fff"
              visible={disabled} 
              font-size={9} />
          </Loader>
        </Form>
      </Content>
    </Container>
  )
}