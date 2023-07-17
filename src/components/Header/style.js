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
        display: none;
    }

    @media (max-width: 654px) {

        img {   
            display: block;
            width: 24px;
            cursor: pointer;
        }
    }
`;

const MiddleContent = styled.div`

    width: 50%;
    position: relative;

    input {
        padding: 5px 35px 5px 10px;
        background-color: #fff;

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

    @media (max-width: 654px) {

        input {
            
            &::placeholder {
                font-size: 14px;
            }
        }
    }
`;

const RightContent = styled.div`

    display: flex;
    align-items: center;
    gap: 20px;

    img {
        width: 32px;
        height: 100%;
        cursor: pointer;
    }

    .addButton {
        width: 28px;
    }

    @media (max-width: 654px) {
        
        img {
            width: 24px;
            height: 24px;
        }
    }
`;

const NotificationIcon = styled.div`

    display: ${props => props.displaynotification === "false" ?  "none" : "" };
    position: relative;

    h2 {
        font-size: 20px;
        font-weight: 700;
        color: #fff;
        background: #000;
        width: 20px;
        border-radius: 15px;
        text-align: center;
        height: 22px;
        position: absolute;
        bottom: 20px;
        left: 20px;
        cursor: pointer;
    }
`;

const Avatar = styled.div`

    img {
        border-radius: 25px;
        height: 32px;
    }
`;


const ProfileOptions = styled.div`

    width: 150px;
    height: auto;
    position: fixed;
    background-color: #217cff;
    border: 2px solid #F4F4F4;
    top: 70px;
    right: 0px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        color: #FFF;
        word-break: break-word;
        font-size: 14px;
    }

    button {

        background-color: inherit;
        font-size: 14px;
        font-weight: 700;
        border: none;
        color: #FFF;
        text-decoration: underline;
        cursor: pointer;
    }
`;

export {
    Container,
    LeftContent,
    MiddleContent,
    RightContent,
    NotificationIcon,
    Avatar,
    ProfileOptions
}