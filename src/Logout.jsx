import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {

    const { logout } = useAuth0();

    return (
        <div>
            <button 
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                LOG OUT
            </button>
        </div>
    )
}

export default Logout;