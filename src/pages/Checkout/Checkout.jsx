import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import AllArticlesLogo from "../../components/AllArticlesLogo";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Checkout() {

    const [form, setForm] = useState({
        name: "",
        address: "",
        complement: "",
        zipcode: "",
        cardname: "",
        cardnumber: "",
        expdate: "",
        seccode: ""
    })
    const navigate = useNavigate()
    const { auth } = useAuth()
    const config = { headers: { Authorization: `Bearer ${auth.token}` } }

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function submitForm(e) {
        e.preventDefault()

        axios.post(`${import.meta.env.VITE_API_URL}/checkout`, form, config)
            .then(res => navigate("/checkout-done"))
            .catch(err => alert(err.response.data))
    }

    return (
        <CheckoutContainer>

            <Header>
                <AllArticlesLogo />
                <button>Cancelar</button>
            </Header>

            <CheckoutItems>
                <InfoContainer>
                    <h1>Informações da compra</h1>
                    <p>Ítens: R$0,00</p>
                    <p>Frete: R$0,00</p>
                    <h1>Total do pedido: </h1> R$0,00
                </InfoContainer>
                <form onSubmit={submitForm}>
                    <AddressContainer>
                        <h1>Endereço de entrega</h1>
                        <input required placeholder="Nome" name="name" value={form.name} onChange={handleForm}></input>
                        <input required placeholder="Endereço" name="address" value={form.address} onChange={handleForm}></input>
                        <input required placeholder="Complemento" type="tel" maxLength={4} name="complement" value={form.complement} onChange={handleForm}></input>
                        <input required placeholder="CEP" type="tel" maxLength={8} name="zipcode" value={form.zipcode} onChange={handleForm}></input>
                    </AddressContainer>
                    <PaymentContainer>
                        <h1>Informações do pagamento</h1>
                        <input required placeholder="Nome no cartão" name="cardname" value={form.cardname} onChange={handleForm}></input>
                        <input required placeholder="Número no cartão" type="tel" maxLength={19} name="cardnumber" value={form.cardnumber} onChange={handleForm}></input>
                        <input required placeholder="Data de expiração (MM/AAAA)" type="tel" maxLength={7} name="expdate" value={form.expdate} onChange={handleForm}></input>
                        <input required placeholder="Código de segurança (CVV)" type="tel" maxLength={4} name="seccode" value={form.seccode} onChange={handleForm}></input>
                    </PaymentContainer>
                    <button type="submit">Confirmar Pedido</button>
                </form>
            </CheckoutItems>

        </CheckoutContainer>
    )
}

const CheckoutContainer = styled.section`
display: flex;
flex-direction: column;
`

const Header = styled.header`
height: 10vh;
width: 100vw;
background-color: #2f8aa3;
display: flex;
align-items: center;
justify-content: space-around;

button {
    height: 7vh;
    width: 30vw;
    font-size: 17px;
    background-color: #e6b720;
}
`

const CheckoutItems = styled.main`
height: 120vh;
width: 100vw;
background-color: #979b9c;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;

input {
    font-size: 17px;
    width: 300px;
}

h1 {
    font-size: 20px;
    margin-bottom: 15px;
}

p {
    font-size: 15px;
    margin-bottom: 10px;
}

button {
    height: 7vh;
    width: 300px;
    background-color: #20e66c;
}
`

const InfoContainer = styled.div`
background-color: #c3c6c7;
border: 0.125em solid;
border-radius: 5px;
padding: 20px;
`

const AddressContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const PaymentContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`