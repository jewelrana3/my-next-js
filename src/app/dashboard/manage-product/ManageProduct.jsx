'use client'

import React, { useRef, useState, useTransition } from 'react';
import ManageSingleProduct from './ManageSingleProduct';
import Modal from '@/components/Modal';
import { useRouter } from 'next/navigation';


const ManageProduct = ({ products }) => {
    const modalRef = useRef(null);
    const [update, setUpdate] = useState(null);
    const [isPending, startTransition] = useTransition();
    const [loading, setLoading] = useState(false)

    const isLoding = isPending || loading

    const router = useRouter();

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
            setLoading(true)
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
                form.reset()
                closeModal();
                startTransition(() => {
                    router.refresh();
                })
                setLoading(false)
            } catch (error) {
                setLoading(false)
                console.log(error)
            }
        }
    }

    const handleDelete = async (id) => {
        setLoading(true)
            try {
                const res = await fetch(`http://localhost:5000/products/${id}`, {
                    method: "DELETE",
                })
                const result = await res.json();
                console.log(result)
                startTransition(() => {
                    router.refresh();
                })
                setLoading(false)
            } catch (error) {
                setLoading(false)
                console.log(error)
            }
        }
    

    return (
        <div>
            <table className={`border-collapse w-full ${isLoding ? 'opacity-50' : 'opacity-100'}`}>
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
            </table>
            <Modal handleSubmit={handleSubmit} closeModal={closeModal} ref={modalRef} update={update} />
        </div>
    );
};

export default ManageProduct;