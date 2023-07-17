import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AllArticlesLogo from "../AllArticlesLogo";
import useAuth from "../../hooks/useAuth";
import useCartInfo from "../../hooks/useCartInfo";
import { Container, LeftContent, MiddleContent, RightContent, NotificationIcon, Avatar, ProfileOptions } from "./style";

import home from "../../assets/images/home.svg";
import magnifying_glass from "../../assets/images/magnifying_glass.svg";
import add_button from "../../assets/images/add_button.svg";
import shopping_cart from "../../assets/images/shopping_cart.svg";

import API from "../../services/api";

export default function Header() {

    const [formData, setFormData] = useState({ searchQuery: "" });
    const [showProfileOptions, setShowProfileOptions] = useState(false);
    const { auth } = useAuth();
    const { cartInfo } = useCartInfo();
    const location = useLocation();
    const navigate = useNavigate();

    const pathsWithoutHeader = ['/', '/cadastro'];
    if (pathsWithoutHeader.includes(location.pathname)) {
        return null;
    }

    function updateForm(e) {
        setFormData({...formData, [e.target.name]: e.target.value });
    }

    function toggleProfileOptions() {
        (showProfileOptions) ? setShowProfileOptions(false) : setShowProfileOptions(true);
    }

    function logout() {

        setShowProfileOptions(false);

        setTimeout(() => {
            API.logout(auth.token);
            localStorage.removeItem("auth");
            localStorage.removeItem("cart");
            localStorage.removeItem("product");
            navigate("/");
        }, 500)
    }

    const displayNotification = (cartInfo.length > 0) ? true : false;

    return (
        <Container>

            <LeftContent>
                <div onClick={() => navigate("/home")}>
                    <AllArticlesLogo />
                    <img src={home} />
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
                <Avatar onClick={toggleProfileOptions}>
                    <img src={auth.image} title={`${auth.name} avatar`} />
                </Avatar>
                {showProfileOptions &&
                    <ProfileOptions>
                        <h2>{auth.name}</h2>
                        <button onClick={logout}>Sair</button>
                    </ProfileOptions>
                }
            </RightContent>
            
        </Container>
    )
}