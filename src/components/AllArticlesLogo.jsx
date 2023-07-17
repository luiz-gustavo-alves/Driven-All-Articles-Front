import styled from "styled-components";

export default function AllArticlesLogo() {

    return (
        <Text>All Articles</Text>
    )
}

const Text = styled.h1`
    font-family: 'Saira Stencil One', cursive;
    font-weight: 400;
    font-size: 32px;
    cursor: pointer;

    @media (max-width: 654px) {
        display: none;
    }
`;