import styled from "styled-components";

const Container = styled.div`

    width: 100%;
    height: 56px;
    padding: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    background-color: #217cff;
    top: 0;
    left: 0;
    z-index: 100;
`;

const LeftContent = styled.div`

    img {
        width: 26px;
        cursor: pointer;
    }
`;

const MiddleContent = styled.div`

    width: 50%;
    position: relative;

    input {
        padding: 5px 35px 5px 10px;
        background-color: #efefef;

        &::placeholder {
            font-size: 16px;
            color: #000;
        }
    }

    img {
        width: 16px;
        height: 100%;
        position: absolute;
        bottom: 0;
        right: 25px;
        cursor: pointer;
    }
`;

const RightContent = styled.div`

    display: flex;
    align-items: center;
    gap: 20px;

    h2 {
        font-size: 25px;
        color: black;
        background: white;
        width: 20px;
        border-radius: 15px;
        text-align: center;
        height: 22px;
        cursor: pointer;
    }

    img {
        width: 32px;
        height: 100%;
        cursor: pointer;
    }
`;

const Avatar = styled.div`

    img {
        border-radius: 25px;
        height: 32px;
    }
`;

export {
    Container,
    LeftContent,
    MiddleContent,
    RightContent,
    Avatar
}