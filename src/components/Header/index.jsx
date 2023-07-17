import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AllArticlesLogo from "../AllArticlesLogo";
import useAuth from "../../hooks/useAuth";
import useCartInfo from "../../hooks/useCartInfo";
import { Container, LeftContent, MiddleContent, RightContent, NotificationIcon, Avatar } from "./style";

import magnifying_glass from "../../assets/images/magnifying_glass.svg";
import add_button from "../../assets/images/add_button.svg";
import shopping_cart from "../../assets/images/shopping_cart.svg";

export default function Header() {

    const [formData, setFormData] = useState({ searchQuery: "" });
    const { auth } = useAuth();
    const cartInfo = useCartInfo();
    const location = useLocation();
    const navigate = useNavigate();

    const pathsWithoutHeader = ['/', '/cadastro'];
    if (pathsWithoutHeader.includes(location.pathname)) {
        return null;
    }

    function updateForm(e) {
        setFormData({...formData, [e.target.name]: e.target.value });
    }

    const displayNotification = (Object.keys(cartInfo).length === 0) ? true : false;

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
                    <img className="addButton" src={add_button} />
                </div>

                <div onClick={() => navigate("/cart-info")}>
                    <img src={shopping_cart} title="Compras"/>

                    <NotificationIcon displaynotification={displayNotification.toString()}>
                        <h2>!</h2>
                    </NotificationIcon>
                </div>
                <Avatar>
                    <img src={auth.image} title={`${auth.name} avatar`} />
                </Avatar>
            </RightContent>
            
        </Container>
    )
}