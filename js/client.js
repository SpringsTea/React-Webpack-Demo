import React from "react";
import ReactDom from "react-dom";
import Layout from "./components/Layout";

//webpack --watch

const app = document.getElementById('app');

ReactDom.render(<Layout/>, app)