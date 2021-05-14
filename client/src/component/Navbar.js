import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import customerAPI from "../network/customer"
import { saveUser } from "../redux/action/userAction"
import { saveCart } from "../redux/action/cartAction"

const Navbar = () => {

    const dispatch = useDispatch()

    // get user from store redux
    const user = useSelector((state) => state.user)
    const cart = useSelector(state => state.cart)

    // on component did mount
    useEffect(() => {
        const init = async () => {
            const token = localStorage.getItem("token")
            const type = localStorage.getItem("type")
            if(token) { // if user is already logined before
                try {
                    if(type === "customer") {
                        const { success, error } = await customerAPI.getMyProfile(token)
                        if(success) {
                            const { customer, cart } = success
                            if(customer) {
                                dispatch(saveUser(customer))
                                dispatch(saveCart(cart))
                            } else throw new Error("Can not get user profile by token.")
                        } else throw error
                    } else {
                        //////////////////
                    }
                } catch(e) {
                    console.log(e);
                } 
            }
        }
        init()
    }, [])

    // logout
    const logOutHandler = () => {
        localStorage.removeItem("token") // remove token
        localStorage.removeItem("type") // remove type of user
        dispatch(saveUser(null)) // delete user in redux store
        dispatch(saveCart([])) // delete cart in redux store
    }

    return (
        <div className="Navbar">
            <div className="headerWrapper">
                <FontAwesomeIcon icon="bars" size="2x" color="#ffffff" className="icon"/>
                <Link className="header" to="/">amazom</Link>
            </div>
            <div className="navItemWrapper">
                { (!user || user.customer_id) && <Link className="cart navItem" to="/cart" >
                        <FontAwesomeIcon icon="shopping-cart" style={{fontSize: "22px" }}/>
                        { cart && <div className="notify">{cart.length}</div> }
                    </Link> }
                { !user && <Link className="signin navItem" to="/gateway">Sign In</Link> }
                { user && <FontAwesomeIcon className="navItem logOut"
                    onClick={logOutHandler} icon="sign-out-alt" style={{ fontSize: "22px" }}/> }
            </div>
        </div>
    );
}
 
export default Navbar;