import { useState } from "react";
import styled from "styled-components";
import AllArticlesLogo from "../../components/AllArticlesLogo";
import axios from "axios";

export default function Checkout() {

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
                <AddressContainer>
                    <h1>Endereço de entrega</h1>
                    <input required placeholder="Nome" type="text"></input>
                    <input required placeholder="Endereço" type="text"></input>
                    <input required placeholder="Complemento" type="number" min="0"></input>
                    <input required placeholder="CEP" type="number" min="0"></input>
                </AddressContainer>
                <PaymentContainer>
                    <h1>Informações do pagamento</h1>
                    <input required placeholder="Nome no cartão" type="text"></input>
                    <input required placeholder="Número no cartão" type="number"></input>
                    <input required placeholder="Data de expiração" type="month"></input>
                    <input required placeholder="Código de segurança (CVV)" type="number" min="0"></input>
                </PaymentContainer>
                <button>Confirmar Pedido</button>
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