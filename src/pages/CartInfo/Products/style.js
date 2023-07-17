import styled from "styled-components";

const Container = styled.div`

    display: flex;
    flex-direction: column;
    gap: 25px;
`;

const Content = styled.div`
    
    display: flex;
    width: 600px;
    margin: 0 auto;
    height: 200px;
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
        width: 150px;
        height: 150px;
    }

    @media (max-width: 654px) {

        margin-left: 0%;
        margin-top: 15px;
    }
`;

const RightContent = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 25px;

    h2, h3, h4 {
        overflow: hidden;
        word-break: break-word;
        text-overflow: ellipsis;
        word-wrap: break-word;
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }

    @media (max-width: 654px) {
        padding: 25px;
        margin: 0;
    }
`;

const TopContent = styled.div`

    h2 {
        font-size: 20px;
        font-weight: 600;
        -webkit-line-clamp: 2;
    }

    @media (max-width: 654px) {
        h2 {
            font-size: 18px;
        }
    }
`;

const BottomContent = styled.div`

    display: flex;
    justify-content: space-between;

    h3 {
        font-size: 24px;
        font-weight: 700;
        color: #217cff;
        cursor: pointer;
    }

    @media (max-width: 654px) {
        
        margin-top: 30px;

        h3 {
            font-size: 20px;
        }
    }
`;

export {
    Container,
    Content,
    LeftContent,
    RightContent,
    TopContent,
    BottomContent
}