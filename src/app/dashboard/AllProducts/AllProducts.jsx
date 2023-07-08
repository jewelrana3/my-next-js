'use client'

import { useRef, useState } from "react";
import ManageSingleProduct from "../manage-product/ManageSingleProduct";
import Modal from "@/components/Modal";
import useProduct from "@/hooks/useProduct";

const AllProducts = () => {
    const { products, isLoading, isValidating, mutate } = useProduct();
    const modalRef = useRef(null);
    const [update, setUpdate] = useState(null);
    


    const openModal = (product) => {
        setUpdate(product);
        modalRef.current.showModal()
    }

    const closeModal = () => {
        setUpdate(null);
        modalRef.current.close()
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const price = form.price.value;
        const data = { title, price }

        if (title && price) {

            try {
                const res = await fetch(`http://localhost:5000/products/${update?.id}`, {
                    method: "PATCH",
                    headers:
                    {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)

                })
                const result = await res.json();
                console.log(result)
                mutate();
                form.reset()
                closeModal();

            } catch (error) {

                console.log(error)
            }
        }
    }

    const handleDelete = async (id) => {

        try {
            const res = await fetch(`http://localhost:5000/products/${id}`, {
                method: "DELETE",
            })
            const result = await res.json();
            console.log(result)
            mutate();

        } catch (error) {

            console.log(error)
        }
    }


    return (
        <div>
            {isLoading && <h1 className="text-center text-2xl font-bold">Loading...</h1>}

            {!isLoading && (<table
                className={`border-collapse w-full ${isValidating ? 'opacity-50' : 'opacity-100'
                    }`}>
                <thead>
                    <tr className='mt-24'>
                        <th className='border border-slate-400'>Title</th>
                        <th className='border border-slate-400'>Price</th>
                        <th className='border border-slate-400'>Update</th>
                        <th className='border border-slate-400'>Delete</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        products.map((product) =>
                            <ManageSingleProduct
                                product={product}
                                handleDelete={handleDelete}
                                openModal={openModal}
                                key={product.id} />)
                    }
                </tbody>
            </table>)}

            <Modal handleSubmit={handleSubmit} closeModal={closeModal} ref={modalRef} update={update} />
        </div>
    );
};

export default AllProducts;