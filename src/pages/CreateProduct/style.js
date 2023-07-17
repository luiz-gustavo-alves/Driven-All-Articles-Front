import styled from "styled-components";

const Container = styled.div`

    margin-top: 70px;
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
`;

const Content = styled.div`

    width: 100vw;
    height: 100vh;
    max-width: 900px;
    margin: 0 auto;
    padding-top: 60px;
`;

const Form = styled.form`

    background-color: #fff;
    padding: 15px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    position: relative;

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

const Loader = styled.div`
  position: absolute;
  bottom: 0;
`;

export {
    Container,
    Title,
    Content,
    Form,
    Loader
}