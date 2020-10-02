import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { addFav } from "../../store/actions/favActions";

export const ProductList = () => {
    const { products } = useSelector(state => state.productState);
    const dispatch = useDispatch();

    return (
        <div className="m-3">
            {products.map((product, key) => (
                <button
                    type="button"
                    className="btn btn-primary btn-block"
                    key={key}
                    onClick={() => dispatch(addFav(product))}
                >
                    {product.Title}
                </button>
            ))}
        </div>
    );
};
