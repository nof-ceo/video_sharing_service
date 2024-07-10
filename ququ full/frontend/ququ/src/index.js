// main.tsx or main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import {NextUIProvider} from "@nextui-org/react";
import App from "./App";
import "./index.css";
import './font.css';
import AuthProvider from "./components/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
        <AuthProvider>
            <NextUIProvider>
                <App />
            </NextUIProvider>
        </AuthProvider>
);