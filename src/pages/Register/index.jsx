import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import AllArticlesLogo from "../../components/AllArticlesLogo";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

export default function Register() {

  const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "", image: "" });
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  function updateForm(e) {
    setFormData({...formData, [e.target.name]: e.target.value });
  }

  function submitForm(e) {
    e.preventDefault();

    const { name, email, password, image, confirmPassword } = formData;

    // se as senhas estão iguais ou nao 
    if (password !== confirmPassword) {
      alert("Entered passwords are different!");
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
      <form onSubmit={submitForm}>
        <AllArticlesLogo />
        <input 
          placeholder="Name" 
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
          placeholder="Password" 
          type="password" 
          name="password"
          required 
          value={formData.password} 
          onChange={updateForm} 
          disabled={disabled} />

        <input 
          placeholder="Confirm Password" 
          type="password"
          name="confirmPassword"
          required
          value={formData.confirmPassword} 
          onChange={updateForm} 
          disabled={disabled} />

        <FileInputLabel htmlFor="imagemInput">
          <FileIcon icon={faUpload} className="file-icon" />
          Select profile picture
          <FileInput 
            id="imagemInput" 
            type="file" 
            accept="image/*" 
            name="image"
            required 
            value={formData.image} 
            onChange={updateForm} 
            disabled={disabled} />
        </FileInputLabel>

        <button type='submit' disabled={disabled}>
          {disabled ? (
            <ThreeDots width={32} height={21} border-radius={4.5} background-color="#284ed6" color="#FFFFFF" font-size={9} />
          ) : (
            <p>Cadastrar</p>
          )}
        </button>
      </form>

      <Link to={"/"}>
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #cf171a;
  color : black;

  button{
    width: 75vh;
    background-color: #174ecf;
    margin-top: 30px;
  }

  
  input{
    width: 70vh;
    background-color: #51cf17;

  }

  a{
    color : black; 
  }

`
const FileInput = styled.input`
    display: none;
  `;

const FileInputLabel = styled.label`
    width: 71vh;
    height: 37px;
    position: relative;
    display: inline-block;
    background-color: #e9e9e9;
    color: #333;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 20px;
    border-radius: 5px;
    outline: none;
    border: 1px ;
    text-align: left;
    background-color: #51cf17;
  `;

const FileIcon = styled(FontAwesomeIcon)`
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    color: #333;
  `


