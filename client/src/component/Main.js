import Product from "./Product"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import productAPI from "../network/product"
import { saveAllProducts } from "../redux/action/allProductsAction"
import ErrorFetching from "./ErrorFetching"
import ReactLoading from "react-loading"

const Main = () => {

    const offset = 0
    const limit = 10
    const [isError, setError] = useState(false)
    const [isLoading, setLoading] = useState(true)
    const dispatch = useDispatch()

    // get all products from redux store
    const allProducts = useSelector((state) => state.allProducts)

    
    useEffect(() => {
        // on component did mount
        const componentDidMount = async () => {
            const { success } = await productAPI.getAllProducts(offset, limit)
            setLoading(false)
            if(success) {
                setError(false)
                dispatch(saveAllProducts(success.data))
            } else {
                setError(true)
            }
        }
        componentDidMount()
    }, [])

    return (
        <div className="Main">
            <div className="container">
                { isLoading && <ReactLoading className="loading" color={"#203040"} /> }
                { isError && <ErrorFetching/> }
                { allProducts && allProducts.map((product, index) => <Product key={product.product_id} index={index} product={product} />) }
            </div>
        </div>
    );
}
 
export default Main;