import Link from "next/link";


const SingleProduct = ({product}) => {
    const {id,title,price} = product;
    return (
        <div>
            <Link href={`/products/${id}`}><h1>{title}</h1></Link>
        </div>
    );
};

export default SingleProduct;