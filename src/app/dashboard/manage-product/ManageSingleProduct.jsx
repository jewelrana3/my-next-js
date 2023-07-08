

const ManageSingleProduct = ({ openModal,product ,handleDelete}) => {
    const { id, title, price, categoriesId, imageURL } = product;
    return (

        <tr className="text-center w-full mt-20">
           
            <td className="border border-slate-400">{title}</td>
            <td className="border border-slate-400">{price}</td>
            <td className="border border-slate-400">
                <button onClick={()=> openModal(product)} className="bg-blue-500 text-white px-2 rounded">
                    Update
                </button>
            </td>
            <td className="border border-slate-400">
                <button onClick={()=> handleDelete(id)} className="bg-blue-500 text-white px-2 rounded">
                    Delete
                </button>
            </td>
          
        </tr>

    );
};

export default ManageSingleProduct;