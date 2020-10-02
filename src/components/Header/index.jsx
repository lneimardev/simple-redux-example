import React from "react";
import { useSelector } from "react-redux";

export const Header = () => {
    const { favs } = useSelector(state => state.favState);

    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#!">
                Catálogo
            </a>
            <h2>
                <span className="badge badge-primary">{favs.length}</span>
            </h2>
        </nav>
    );
};
