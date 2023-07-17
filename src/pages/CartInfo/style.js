import styled from "styled-components";

const Container = styled.div`

    padding-top: 70px;
`;

const Title = styled.div`

    background-color: #fff;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    h2 {
        font-size: 32px;
        font-weight: 500;
        font-style: italic;
        color: #000;
        letter-spacing: 5px;
    }

    @media (max-width: 654px) {

        h2 {
            font-size: 24px;
        }
    }
`;

const Content = styled.div`
    
    padding: 60px 35px;
`;

const CheckoutContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    margin: 0 auto;
`;

const Checkout = styled.button`

    color: #fff;
    border: 1px solid #217cff;
    background-color: #217cff;
    width: 300px;

    @media (max-width: 654px) {
        width: 200px;
        height: 50px;
        font-size: 18px;
    }
`;

const Default = styled.div`

    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
    width: 600px;
    margin: 0 auto;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 15px;

    h2 {
        font-size: 24px;
        text-align: center;
        color: #000;
    }

    @media (max-width: 654px) {
        width: 300px;

        h2 {
            font-size: 20px;
        }
    }
`;

export {
    Container,
    Title,
    Content,
    CheckoutContainer,
    Checkout,
    Default
}