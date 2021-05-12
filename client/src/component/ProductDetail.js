import { useSelector } from "react-redux"
import { useParams, useHistory } from "react-router-dom"
import { useState } from "react"

const ProductDetail = () => {

    const { index } = useParams()
    const history = useHistory()

    // set quantity array
    const qtyArray = []
    for(let i = 1; i < 10; i++)
        qtyArray[i-1] = i

    // set image array
    const images = ["https://m.media-amazon.com/images/I/817EoIxv-8L._AC_UL320_.jpg",
        "https://m.media-amazon.com/images/I/91SNyF6wi2L._AC_UL320_.jpg"]

    const [currentImageIndex, setImageIndex] = useState(0)

    const imageSelectHandler = (index) => {
        setImageIndex(index)
    }

    // get product
    const product = useSelector((state) => state.allProducts[index])
    
    // set user
    const customer = useSelector(state => state.user) 

    // btn add cart
    const btnAddCartHandler = () => {
        if(!customer) { // if user has not been login
            history.push({
                pathname: "/gateway",
                state: {
                    from: "productDetail"
                }
            })
        } else {

        }
    }

    return (
        <div className="ProductDetail">
            <img src={images[currentImageIndex]}
                alt={product.short_description} className="mainImage" />
            <div className="info">
                <div className="name">{product.name}</div>
                <div className="descriptionWrapper">
                    <span className="descriptionText">Description: </span>
                    <span className="descriptionContent">{ product.full_description }</span>
                    </div>
                <div className="supplierNameWrapper">
                    <span className="supplierNameText">Shop: </span>
                    <span className="supplierNameContent">{ product.supplier_name }</span>
                </div>
                <div className="thumbnailwrapper">
                    <div className="thumbnailText">Images: </div>
                    <div className="thumbnailContentWrapper">
                        {images.map((image, index) => <img key={index} src={image} alt="img"
                            className={currentImageIndex===index ? "imageSelected" : ""} onClick={() => imageSelectHandler(index)} />)}
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="priceWrapper">
                    <span className="priceText">Price</span>
                    <span className="priceContent">{ product.cost } $</span>
                </div>
                <div className="statusWrapper">
                    <span className="statusText">Status</span>
                    <span className="statusContent">Available</span>
                </div>
                <div className="qtyWrapper">
                    <span className="qtyText">Quantity</span>
                    <select className="qtyContent">
                        { qtyArray.map((num) => <option key={num} value={num}>{num}</option>) }
                    </select>
                </div>
                <button className="btnAddToCart" onClick={btnAddCartHandler}>Add to cart</button>
            </div>
        </div>
    );
}
 
export default ProductDetail;