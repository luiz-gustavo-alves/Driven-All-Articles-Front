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

    width: 188px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    cursor: pointer;

    img {
        width: 188px;
        height: 188px;
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
`;

export {
    Container,
    Content,
    Details
}