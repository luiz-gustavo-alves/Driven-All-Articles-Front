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
`;


const Content = styled.div`
    
    padding: 60px 35px;
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

    h2 {
        font-size: 24px;
        color: #000;
    }
`;

const Loader = styled.div`

    position: absolute;
    top: 50%;  
    left: 50%;
    transform: translate(-50%, -50%);
`;

export {
    Container,
    Title,
    Content,
    Loader,
    Default
}