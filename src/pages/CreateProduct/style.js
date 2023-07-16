import styled from "styled-components";

const Container = styled.div`

    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 100px 35px 60px 35px;
    max-width: 900px;
    margin: 0 auto;

    h2 {
        font-size: 24px;
        font-weight: 500;
        color: #000;
        text-decoration: underline;
        margin-bottom: 30px;
    }
`;

const Form = styled.form`

    background-color: #fff;
    padding: 15px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    button {
        width: 85%;
        height: 45px;
        background-color: #217cff;
        color: #fff;
        &:focus {
            outline: 2px solid #000;
        }
        &:hover {
            outline: 2px solid #000;
        }
    }
    input{
        width: 85%;
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
`;

export {
    Container,
    Form
}