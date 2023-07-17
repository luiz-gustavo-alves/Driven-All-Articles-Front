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
        text-align: center;
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

    margin: 60px 35px;
`;

const Footer = styled.footer`

    display: ${props => props.hidden ? "none" : "flex"};
    justify-content: center;
    align-items: center;
    margin-top: 35px;
`;

const ScrollButton = styled.button`

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

const Loader = styled.div`

    position: absolute;
    top: 50%;  
    left: 50%;
    transform: translate(-50%, -50%);
`;

export {
    Container,
    Content,
    Title,
    Footer,
    ScrollButton,
    Loader
}