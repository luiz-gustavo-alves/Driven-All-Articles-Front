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
      <form onSubmit={submitForm}>
        <AllArticlesLogo />
        <input 
          placeholder="E-mail" 
          type="email" 
          required 
          value={formData.email} 
          onChange={updateForm} 
          disabled={disabled} />

        <input 
          placeholder="Senha" 
          type="password" 
          autoComplete="new-password" 
          required 
          value={formData.password} 
          onChange={updateForm} 
          disabled={disabled} />

        <button type='submit' disabled={disabled} >
          {disabled ? (
            <ThreeDots width={32} height={21} border-radius={4.5} background-color="#133ae4" color="#FFFFFF" font-size={9} />
          ) : (
            <p>Entrar</p>
          )}
        </button>
      </form>

      <Link to={"/cadastro"}>
        Primeira vez? Cadastre-se!
      </Link>
    </SingInContainer>
  )
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #cf171a;
  
  button{
    width: 75vh;
    background-color: #174ecf;
  }

  input{
    width: 70vh;
    background-color: #51cf17;
  }
`
