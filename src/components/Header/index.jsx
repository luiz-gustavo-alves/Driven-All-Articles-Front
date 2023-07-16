import { useState } from "react";
import { useLocation } from "react-router-dom";
import AllArticlesLogo from "../AllArticlesLogo";
import useAuth from "../../hooks/useAuth";
import styled from "styled-components";

import shopping_cart from "../../assets/images/shopping_cart.svg";

export default function Header() {

    const [formData, setFormData] = useState({ searchQuery: "" });
    const { auth } = useAuth();
    const location = useLocation();

    const pathsWithoutHeader = ['/', '/cadastro'];
    if (pathsWithoutHeader.includes(location.pathname)) {
        return null;
    }

    function updateForm(e) {
        setFormData({...formData, [e.target.name]: e.target.value });
    }

    return (
        <Container>

            <LeftContent>
                <AllArticlesLogo />
            </LeftContent>

            <MiddleContent>
                <form>
                    <input
                        placeholder="Pesquisar" 
                        type="text" 
                        name="searchQuery"
                        required 
                        value={formData.searchQuery} 
                        onChange={updateForm} 
                    />
                </form>
            </MiddleContent>

            <RightContent>
                <div>
                    <h2>+</h2>
                </div>
                <div>
                    <img src={shopping_cart} title="Compras"/>
                </div>
                <Avatar>
                    <img src={auth.image} title={`${auth.name} avatar`} />
                </Avatar>
            </RightContent>
            
        </Container>
    )
}

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

    input {
        padding: 5px 15px;
        background-color: #efefef;

        &::placeholder {
            font-size: 16px;
            color: #000;
        }
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
        background-image: url(${props => props.profileImage});
        border-radius: 25px;
    }
`;