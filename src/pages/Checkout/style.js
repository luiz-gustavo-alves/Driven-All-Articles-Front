import styled from "styled-components";

const Container = styled.section`

    display: flex;
    flex-direction: column;
    padding-top: 70px;
`

const Title = styled.div`

    background-color: #fff;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 10px;

    h2 {
        font-size: 32px;
        font-weight: 500;
        font-style: italic;
        text-align: center;
        color: #000;
        letter-spacing: 5px;
    }

    @media (max-width: 654px) {

        h2 {
            font-size: 22px;
            font-weight: 600;
        } 
    }  
`;

const CheckoutItems = styled.main`

    padding-top: 100px;
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
        color: #000;
    }

    h2 {
        font-size: 18px;
        margin-bottom: 10px;
    }

    span {
        font-weight: 600;
    }

    button {
        height: 7vh;
        width: 300px;
        background-color: #20e66c;
    }
`;

const InfoContainer = styled.div`

    width: 600px;
    background-color: #fff;
    border: 3px solid #217cff;
    border-radius: 5px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    gap: 15px;

    @media (max-width: 654px) {
        width: 80%;
    }
`;

const FinishContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    margin: 0 auto;
`;

const FinishOrderButton = styled.button`

    color: #fff;
    border: 1px solid #217cff;
    background-color: #217cff;
    width: 300px;
    height: 54px;

    p {
        text-align: center;
        font-size: 500;
    }

    @media (max-width: 654px) {
        width: 200px;
        height: 50px;
        font-size: 18px;
    }
`;

export {
    Container,
    Title,
    CheckoutItems,
    InfoContainer,
    FinishContainer,
    FinishOrderButton
}