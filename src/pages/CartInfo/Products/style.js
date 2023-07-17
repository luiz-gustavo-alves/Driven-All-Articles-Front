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
`;

const TopContent = styled.div`

    h2 {
        font-size: 20px;
        font-weight: 600;
        -webkit-line-clamp: 2;
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
`;

export {
    Container,
    Content,
    LeftContent,
    RightContent,
    TopContent,
    BottomContent
}