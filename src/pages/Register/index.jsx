import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import AllArticlesLogo from "../../components/AllArticlesLogo";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

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
    console.log(name)
    console.log(email)
    console.log(password)
    console.log(image)


    // se as senhas estão iguais ou nao 
    if (password !== confirmPassword) {
      alert("As senhas inseridas são diferentes!");
    }

    const url = `http://localhost:5000/cadastro`
    // para quando tiver o deploy 
    //const url = `${import.meta.env.VITE_API_URL}/cadastro`

    setDisabled(true);

    const promise = axios.post(url, { name, email, password, image })
    promise.then(() => navigate('/'));
    promise.catch(err => {
      alert(err.message);
      setDisabled(false);
    });
  }

  return (
    <SingUpContainer>
      <Form onSubmit={submitForm}>
        <div onClick={() => navigate("/")}>
          <AllArticlesLogo />
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