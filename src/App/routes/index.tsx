import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/home";
import { Product } from "../pages/product"

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="*" element={< Navigate to="/" />} />
        </Routes>
    )
}