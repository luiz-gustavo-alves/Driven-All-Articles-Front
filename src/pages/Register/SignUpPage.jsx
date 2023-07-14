import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import AllArticlesLogo from "../../components/AllArticlesLogo";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';






export default function Register() {
  const [name, setName] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();


  function register(e) {
    e.preventDefault();
    // se as senhas estão iguais ou nao 
    if (password != confirmPassword) {
      return alert("Entered passwords are different!");
    }
    const url = `http://localhost:5000/cadastro`;
    // para quando tiver o deploy 
    //const url = `${import.meta.env.VITE_API_URL}/cadastro`

    const data = {
      name: name,
      email: email,
      password: password,
      image: image
    };
    const promise = axios.post(url, data)
    setDisabled(true);
    promise.then(response => navigate('/'));
    promise.catch(response => {
      alert(response.response.data.message);
      setDisabled(false);
    })
  }

  return (
    <SingUpContainer>
      <form onSubmit={register}>
        <AllArticlesLogo />
        <input placeholder="Name" type="text" required value={name} onChange={(e) => setName(e.target.value)} disabled={disabled} />
        <input placeholder="E-mail" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={disabled} />
        <input placeholder="Password" type="password" autoComplete="new-password" required value={password} onChange={(e) => setPassword(e.target.value)} disabled={disabled} />
        <input placeholder="Confirm Password" type="password" autoComplete="new-password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} disabled={disabled} />
        <FileInputLabel htmlFor="imagemInput">
          <FileIcon icon={faUpload} className="file-icon" />
          Select profile picture
          <FileInput id="imagemInput" type="file" accept="image/*" required value={image} onChange={(e) => setImage(e.target.value)} disabled={disabled} />
        </FileInputLabel>
        <button type='submit' disabled={disabled}>
          {disabled ? (
            <ThreeDots width={32} height={21} border-radius={4.5} background-color="#284ed6" color="#FFFFFF" font-size={9} />
          ) : (
            <p>Register</p>
          )}
        </button>
      </form>


      <Link to={"/"}>
        Already have an account? Get in now!
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


