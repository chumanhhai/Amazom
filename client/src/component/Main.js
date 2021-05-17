import Product from "./Product"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState, useRef } from "react"
import productAPI from "../network/product"
import { saveAllProducts } from "../redux/action/allProductsAction"
import ErrorFetching from "./ErrorFetching"
import ReactLoading from "react-loading"
import Carousel from "react-elastic-carousel"

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
            const { success, error } = await productAPI.getAllProducts(offset, limit)
            setLoading(false)
            if(success) {
                setError(false)
                dispatch(saveAllProducts(success.data))
            } else {
                setError(true)
                console.log(error);
            }
        }
        componentDidMount()
    }, [])

    // carousel
    const carouselRef = useRef()
    const carouselOnChangeHandler = (item, index) => {
        if(index === 4) {
            carouselRef.current.goTo(0)
        }
    }

    return (
        <div className="Main">
            <Carousel className="carousel"
                itemsToShow={1}
                showArrows={false}
                enableAutoPlay={true}
                autoPlaySpeed={3000}
                ref={carouselRef}
                onChange={carouselOnChangeHandler}>
                <img src="/img/shop1.jpg" alt="shoping" className="carouselItem" />
                <img src="/img/shop2.jpg" alt="shoping" className="carouselItem" />
                <img src="/img/shop3.jpg" alt="shoping" className="carouselItem" />
                <img src="/img/shop4.jpg" alt="shoping" className="carouselItem" />
                <img src="/img/shop5.jpg" alt="shoping" className="carouselItem" />
            </Carousel>
            <div className="container">
                { isLoading && <ReactLoading className="loading" color={"#203040"} /> }
                { isError && <ErrorFetching/> }
                { allProducts && allProducts.map((product, index) => <Product key={product.product_id} index={index} product={product} />) }
            </div>
        </div>
    );
}
 
export default Main;