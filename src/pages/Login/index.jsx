import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import AllArticlesLogo from "../../components/AllArticlesLogo";

export default function Login() {

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [disabled, setDisabled] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  function updateForm(e) {
    setFormData({...formData, [e.target.name]: e.target.value });
  }

  function submitForm(e) {
    e.preventDefault();

    const url = `http://localhost:5000/`;
    // para quando tiver o deploy 
    //const url = `${import.meta.env.VITE_API_URL}/`

    setDisabled(true);

    const promise = axios.post(url, {...formData});
    promise.then(res => {

      login(res.data);
      navigate("/home");
    });
    promise.catch(err => {
      alert(err.message);
      setDisabled(false);
    });
  }


  return (
    <SingInContainer>
      <Form onSubmit={submitForm}>
        <AllArticlesLogo />
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
          autoComplete="new-password" 
          required 
          value={formData.password} 
          onChange={updateForm} 
          disabled={disabled} />

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

      <Link to={"/cadastro"}>
        Primeira vez? Cadastre-se!
      </Link>
    </SingInContainer>
  )
}

const SingInContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: #217cff;
  
  button {
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
  input{
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
`;

const Loader = styled.div`
  position: absolute;
  bottom: 0;
`;