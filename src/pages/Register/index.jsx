import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

import API from "../../services/api";

export default function Register() {

  const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "", image: "" });
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  function updateForm(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function submitForm(e) {
    e.preventDefault();

    const { name, email, password, confirmPassword, image } = formData;

    // se as senhas estão iguais ou nao 
    if (password !== confirmPassword) {
      alert("As senhas inseridas são diferentes!");
    }

    setDisabled(true);

    const promise = API.signUp({ name, email, password, image });
    promise.then(() => navigate('/'));
    promise.catch(err => {
      alert(err.response.data);
      setDisabled(false);
    });
  }

  return (
    <SingUpContainer>
      <Form onSubmit={submitForm}>
        <div onClick={() => navigate("/")}>
          <Text>All Articles</Text>
        </div>
        <input
          placeholder="Nome"
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={updateForm}
          disabled={disabled} />

        <input
          placeholder="E-mail"
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={updateForm}
          disabled={disabled} />

        <input
          placeholder="Senha"
          type="password"
          name="password"
          required
          value={formData.password}
          onChange={updateForm}
          disabled={disabled} />

        <input
          placeholder="Confirmar Senha"
          type="password"
          name="confirmPassword"
          required
          value={formData.confirmPassword}
          onChange={updateForm}
          disabled={disabled} />

        <input
          placeholder="Link da imagem"
          type="text"
          name="image"
          required
          value={formData.image}
          onChange={updateForm}
          disabled={disabled}
        />

        <button type='submit' disabled={disabled} >
          {disabled ? "" : "Entrar"}
        </button>
        <Loader>
          <ThreeDots
            width={70}
            height={45}
            border-radius={4.5}
            color="#000"
            visible={disabled}
            font-size={9} />
        </Loader>
      </Form>

      <Link to={"/"}>
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>
  )
}

const Text = styled.h1`
    font-family: 'Saira Stencil One', cursive;
    font-weight: 400;
    font-size: 32px;
    cursor: pointer;
`;

const SingUpContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: #217cff;

  button{
    width: 75%;
    height: 45px;
    background-color: #efefef;
    color: #000;

    &:focus {
        outline: 2px solid #000;
    }

    &:hover {
        outline: 2px solid #000;
    }
  }

  input {
    width: 75%;
    height: 45px;
    background-color: #efefef;

    &::placeholder {
      color: #000;
    }

    &:focus {
        outline: 2px solid #000;
    }

    &:hover {
        outline: 2px solid #000;
    }
  }

  a {

    &:hover {
      text-decoration: underline;
    }
  }
`

const Form = styled.form`

  position: relative;
`

const Loader = styled.div`

  position: absolute;
  bottom: 0;
`