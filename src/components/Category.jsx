import React, { useState, useEffect } from 'react'
import Product from './Product';

const Category = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);

    useEffect(() => {
        let componentMounted = true;
        const getProdcuts = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            if (componentMounted) {
                const data = await response.json();
                setData(data);
                setFilter(data);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProdcuts();
    }, []);
    const filterProduct = (category) => {
        const updateList = data.filter((x) => x.category === category);
        setFilter(updateList);
    }
    return (
        <div >
            <section className="py-14">
            <div className="fixed py-2 bg-white shadow-lg flex fex-row items-center mx-auto w-full z-20 justify-center">
                <button className="btn btn-outline-dark p-2 bg-black text-white rounded  m-1 btn-sm" onClick={() => setFilter(data)}>All</button>
                <button className="btn btn-outline-dark p-2 bg-black text-white rounded m-1 btn-sm" onClick={() => filterProduct("women's clothing")}>Women</button>
                <button className="btn btn-outline-dark p-2 bg-black text-white rounded m-1 btn-sm" onClick={() => filterProduct("men's clothing")}>Men</button>
                <button className="btn btn-outline-dark p-2 bg-black text-white rounded m-1 btn-sm" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                <button className="btn btn-outline-dark p-2 bg-black text-white rounded m-1 btn-sm" onClick={() => filterProduct("electronics")}>Electronics</button>
            </div>
                <div className="container mx-auto py-20">
                    <h1 className="text-3xl font-semibold mb-10 text-center">Explore Our Products</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
                        {filter.map((product) => {
                            return (
                                <Product product={product} key={product.id} />
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Category