import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AllArticlesLogo from "../AllArticlesLogo";
import useAuth from "../../hooks/useAuth";

import magnifying_glass from "../../assets/images/magnifying_glass.svg";
import shopping_cart from "../../assets/images/shopping_cart.svg";
import { Container, LeftContent, MiddleContent, RightContent, Avatar } from "./style";

export default function Header() {

    const [formData, setFormData] = useState({ searchQuery: "" });
    const { auth } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

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
                <div onClick={() => navigate("/home")}>
                    <AllArticlesLogo />
                </div>
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
                <img title="Pesquisar" src={magnifying_glass} />
            </MiddleContent>

            <RightContent>
                <div onClick={() => navigate("/create-product")}>
                    <h2 title="Criar Produto">+</h2>
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