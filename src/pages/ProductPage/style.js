import styled from "styled-components";

const Container = styled.div`

    padding: 100px 35px 60px 35px;
    margin: 0 auto;
    max-width: 900px;
`;

const Content = styled.div`
   
    display: flex;
    height: 350px;
    background-color: #fff;
`;

const LeftContent = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 15px;

    img {
        width: 300px;
        height: 300px;
    }
`;

const RightContent = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 25px;
    margin: 25px;
    width: 100%;

    h2, h3, h4 {
        overflow: hidden;
        word-break: break-word;
        text-overflow: ellipsis;
        word-wrap: break-word;
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }

    h2 {
        font-size: 20px;
        font-weight: 600;
        -webkit-line-clamp: 2;
    }
`;

const TopContent = styled.div`

    max-height: 85%;
`;

const DetailsContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap: 35px;
`;

const ValueContainer = styled.div`

    height: 50px;
    display: flex;
    align-items: center;
    background-color: #f8f8f8;

    h4 {
        font-size: 34px;
        font-weight: 700;
        color: #217cff;
        cursor: pointer;
        margin: 15px;
    }
`;

const QuantityContainer = styled.div`

    display: flex;
    gap: 20px;
    height: 60px;
    margin-top: 35px;
    align-items: center;

    p {
        color: #757575;
    }
`;

const QuantityButtonsContainer = styled.div`

    display: flex;
    align-items: center;

    .quantity {
        font-size: 14px;
    }

    button {
        width: 24px;
        height: 24px;
        border: 1px solid #757575;
        color: #000;
        font-size: 18px;
        padding: 0;
    }
`;

const ShoppingCartButton = styled.button`

    height: 40px;
    border: 1px solid #217cff;
    background-color: #217cff;
    color: #fff;
    font-size: 18px;
    padding: 0;
`;

const Description = styled.div`

    background-color: #fff;
    padding: 15px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin-top: 25px;

    p {
        font-size: 18px;
        font-weight: 600;
        text-decoration: underline;
        margin-bottom: 15px;
    }
`;

export {
    Container,
    Content,
    LeftContent,
    RightContent,
    TopContent,
    DetailsContainer,
    ValueContainer,
    QuantityContainer,
    QuantityButtonsContainer,
    ShoppingCartButton,
    Description
}