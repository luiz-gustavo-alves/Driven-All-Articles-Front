import styled from "styled-components";

const Container = styled.div`

    padding: 100px 35px 60px 35px;
    margin: 0 auto;
    width: 654px;

    @media (max-width: 654px) {
        padding: 100px 0;
        width: 80%;
        display: flex;
        flex-direction: column;
        gap: 25px;
    }
`;

const Content = styled.div`
   
    display: flex;
    height: 350px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    @media (max-width: 654px) {
        height: auto;
        flex-direction: column;
        width: 275px;
        margin: 0 auto;
    }
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

    @media (max-width: 654px) {

        margin-left: 0%;
        margin-top: 15px;

        img {
            width: 225px;
            height: 225px;
        }
    }
`;

const RightContent = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 25px;
    margin: 25px;
    width: 100%;

    h2, h3 {
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
        -webkit-line-clamp: 3;
    }

    @media (max-width: 654px) {
        padding: 25px;
        margin: 0;

        h2 {
            font-size: 18px;
        }
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

    h3 {
        font-size: 34px;
        font-weight: 700;
        color: #217cff;
        cursor: pointer;
        margin: 15px;
    }

    @media (max-width: 654px) {
        
        height: 35px;

        h3 {
            font-size: 26px;
        }
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

    span {
        font-weight: 700;
    }
`;

const ShoppingCartButton = styled.button`

    height: 40px;
    border: 1px solid #217cff;
    background-color: #217cff;
    color: #fff;
    font-size: 18px;
    padding: 0;

    @media (max-width: 654px) {

        height: 25px;
        font-size: 14px;
    }
`;

const UserInfo = styled.div`

    background-color: #fff;
    padding: 15px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin-top: 25px;

    display: flex;
    justify-content: space-between;

    @media (max-width: 654px) {
        flex-direction: column;
        width: 275px;
        margin: 0 auto;
    }
`;

const LeftUserInfo = styled.div`

    display: flex;
    align-items: center;

    img {
        width: 34px;
        height: 34px;
        margin-right: 10px;
    }

    h2 {
        font-weight: 600;
    }

    @media (max-width: 654px) {

        margin: 25px auto;
        width: 275px;

        p {
            font-size: 15px;
        }
    }
`;

const RightUserInfo = styled.div`

    display: flex;
    align-items: center;

    h2 {
        color: #757575;
        text-align: center;
    }
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

    @media (max-width: 654px) {

        margin: 25px auto;
        width: 275px;

        p {
            font-size: 15px;
        }
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
    ShoppingCartButton,
    UserInfo,
    LeftUserInfo,
    RightUserInfo,
    Description
}