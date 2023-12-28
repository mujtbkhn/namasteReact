import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShimmerStoreCard, StoreCard } from "../cards/StoreCard";

export const StoreDetails = ({sale, item}) => {
    const params = useParams();
    const { id } = params;

    const [product, setProduct] = useState(null);

    useEffect(() => {
        getSingleProductInfo();
    }, [id]);

    async function getSingleProductInfo() {
        try {
            const data = await fetch(`https://fakestoreapi.com/products/${id}`);
            const json = await data.json();
            setProduct(json);
        } catch (error) {
            console.error("Error fetching product details:", error);
        }
    }

    return (
        <>
            {product ? (
                <div className="flex flex-col items-center justify-center pt-8 font-semibold ">
                    <h1>Store Id: {id}</h1>
                    <h1>Store Details Page</h1>
                    <h2>Description: </h2>
                    <h3 className="px-20">{product.description}</h3>
                    <StoreCard {...product} key={product.id} />
                </div>

            ) : (
                <ShimmerStoreCard />
            )}
        </>
    );
};
