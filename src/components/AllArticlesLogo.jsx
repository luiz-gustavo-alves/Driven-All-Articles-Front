import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function AllArticlesLogo() {

    const navigate = useNavigate();

    return (
        <Text onClick={() => navigate("/")}>All Articles</Text>
    )
}

const Text = styled.h1`
    font-family: 'Saira Stencil One', cursive;
    font-weight: 400;
    font-size: 32px;
    cursor: pointer;
`

