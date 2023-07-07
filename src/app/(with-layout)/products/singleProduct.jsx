import Link from "next/link";


const SingleProduct = ({product}) => {
    const {id,title,price} = product;
    return (
        <div className="bg-slate-300 bg-opacity-20 mr-12 p-4">
            <h1>{title}</h1>
            <p>{price}</p>
            <Link href={`/products/${id}`}><button className=" bg-cyan-500 p-1 rounded-lg">Details</button></Link>
        </div>
    );
};

export default SingleProduct;