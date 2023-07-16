import { useState } from "react";
import styled from "styled-components";
import AllArticlesLogo from "../../components/AllArticlesLogo";
import { ThreeDots } from "react-loader-spinner";

export default function CreateProducts() {
    const [disabled, setDisabled] = useState(false);
    const [formData, setFormData] = useState({ image: "", title: "", value: "", description: "", quantity: "" });

    function submitForm() {

        const url = `http://localhost:5000/products`
        // para quando tiver o deploy 
        //const url = `${import.meta.env.VITE_API_URL}/cadastro`

        setDisabled(true);

        const promise = axios.post(url, formData)
        promise.then(() => navigate('/home'));
        promise.catch(err => {
            alert(err);
            setDisabled(false);
        });

    }

    function updateForm(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function convertToFloatingNumber(value) {
        const numberYetString = value.replace(',', '.'); // traca a , por .
        const floatingNumber = parseFloat(numberYetString); // passa para numero flutuante
        return floatingNumber.toFixed(2); // aqui eu falo quantas casas decimais eu quero
    }



    return (
        <SingUpContainer>
            <Form onSubmit={submitForm}>
                <AllArticlesLogo />
                <input
                    placeholder="Link da imagem do produto"
                    type="text"
                    name="image"
                    required
                    value={formData.image}
                    onChange={updateForm}
                    disabled={disabled} />

                <input
                    placeholder="Nome do produto"
                    type="text"
                    name="title"
                    required
                    value={formData.title}
                    onChange={updateForm}
                    disabled={disabled} />

                <input
                    placeholder="Valor do produto"
                    type="number"
                    name="value"
                    required
                    value={formData.value}
                    onChange={updateForm}
                    disabled={disabled} />

                <input
                    placeholder="Descrição do produto"
                    type="text"
                    name="description"
                    required
                    value={formData.description}
                    onChange={updateForm}
                    disabled={disabled} />

                <input
                    placeholder="Quantidade de produtos"
                    type="number"
                    name="quantity"
                    required
                    value={formData.quantity}
                    onChange={updateForm}
                    disabled={disabled}
                />

                <button type='submit' disabled={disabled} >
                    {/* {disabled ? "" : "Entrar"} */}
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

            {/* <Link to={"/"}>
            Já tem uma conta? Entre agora!
          </Link> */}
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
const FileInput = styled.input`
        display: none;
      `

const Form = styled.form`
    
      position: relative;
    `

const Loader = styled.div`
    
      position: absolute;
      bottom: 0;
    `
