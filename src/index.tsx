import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";

import "normalize.css";
import "@/assets/css/index.less";

import App from "./App";
import store from "./store";
import { antdTheme, pageTheme } from "@/assets/theme";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    //   <React.StrictMode>
    <Provider store={store}>
        <ThemeProvider theme={pageTheme}>
            <ConfigProvider theme={antdTheme}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ConfigProvider>
        </ThemeProvider>
    </Provider>
    //   </React.StrictMode>
);
