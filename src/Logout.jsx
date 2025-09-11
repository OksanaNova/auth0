import { useAuth0 } from "@auth0/auth0-react";
import Secret from "./Secret";

const Logout = () => {

    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div>
                <button 
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    LOG OUT
                </button>
                <Secret />
            </div>
        )
    )
}

export default Logout;