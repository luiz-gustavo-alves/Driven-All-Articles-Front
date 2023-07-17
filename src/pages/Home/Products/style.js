import styled from "styled-components";

const Container = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    max-width: 900px;
    margin: 0 auto;
`;

const Content = styled.div`

    opacity: ${props => props.zeroquantity === "true" ? 0.5 : 1};
    cursor: ${props => props.zeroquantity === "true" ? "not-allowed" : "pointer"};

    width: 188px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    position: relative;

    img {
        width: 188px;
        height: 188px;
    }

    @media (max-width: 654px) {

        width: 100px;

        img {
            width: 100px;
            height: 100px;
        }
    }
`;

const Details = styled.div`

    width: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    h2, h3 {
        overflow: hidden;
        word-break: break-word;
        text-overflow: ellipsis;
        word-wrap: break-word;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }

    h3 {
        font-weight: 500;
        font-size: 18px;
        color: #217cff;
    }

    @media (max-width: 654px) {

        padding: 8px;

        h2, h3 {
            font-size: 14px;
        }
    }
`;

const DeleteButton = styled.div`

    position: absolute;
    top: 5px;
    right: 2px;

    img {
        width: 24px;
        height: 24px;
        cursor: pointer;
    }
`;

export {
    Container,
    Content,
    Details,
    DeleteButton
}