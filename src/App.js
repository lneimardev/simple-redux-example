import React from "react";
import { useDispatch } from "react-redux";

import PRODUCT_MOCK from "./products.json";
import { Header } from "./components/Header/index.jsx";
import { ProductList } from "./components/ProductList/index.jsx";
import { setProducts } from "./store/actions/productActions";

function App() {
    const dispatch = useDispatch();

    return (
        <>
            <Header />
            <ProductList />

            <div>
                <button
                    type="button"
                    className="btn btn-danger btn-block"
                    onClick={() => dispatch(setProducts(PRODUCT_MOCK))}
                >
                    Carrega produtos na store
                </button>
            </div>
        </>
    );
}

export default App;
