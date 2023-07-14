import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import { AuthContext } from "../../contexts/Contex";
import AllArticlesLogo from "../../components/AllArticlesLogo";


export default function Login() {

  const { setAuth } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();
    const data = {
      email: email,
      password: password
    }
    const url = `http://localhost:5000/`;
    // para quando tiver o deploy 
    //const url = `${import.meta.env.VITE_API_URL}/`

    const promise = axios.post(url, data);
    setDisabled(true);
    promise.then(response => {
      localStorage.setItem("user", JSON.stringify({ email, token: response.data.token, name: response.data.name }));
      setAuth({ email, token: response.data.token, name: response.data.name })
      navigate("/home");

    });
    promise.catch(response => {
      alert(response.response.data.message);
      setDisabled(false);
    });
  }


  return (
    <SingInContainer>
      <form onSubmit={login}>
        <AllArticlesLogo />
        <input placeholder="E-mail" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={disabled} />
        <input placeholder="Password" type="password" autoComplete="new-password" required value={password} onChange={(e) => setPassword(e.target.value)} disabled={disabled} />
        <button type='submit' disabled={disabled} >
          {disabled ? (
            <ThreeDots width={32} height={21} border-radius={4.5} background-color="#133ae4" color="#FFFFFF" font-size={9} />
          ) : (
            <p>To enter</p>
          )}
        </button>
      </form>

      <Link to={"/cadastro"}>
        First time? Register!
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
