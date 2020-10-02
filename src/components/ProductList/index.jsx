import React from "react";
import { useSelector } from "react-redux";

export const ProductList = () => {
    const { products } = useSelector(state => state.productState);

    return (
        <div className="m-3">
            {products.map((obj, key) => (
                <button
                    type="button"
                    className="btn btn-primary btn-block"
                    key={key}
                >
                    {obj.Title}
                </button>
            ))}
        </div>
    );
};
