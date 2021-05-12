import { Link } from "react-router-dom"

const Product = (props) => {

    const { product, index } = props

    return (
        <div className="Product">
            <Link to={"/product/" + index}>
                <div className="card">
                    <img src="https://m.media-amazon.com/images/I/817EoIxv-8L._AC_UL320_.jpg" alt={product.short_description} />
                    <div className="cardBody">
                        <div className="name">{product.name}</div>
                        <div className="price">{product.cost}$</div>
                        <div className="supplierName">{product.supplier_name}</div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
 
export default Product;