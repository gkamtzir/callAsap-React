import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../css/main.css';
import '../css/font.css';

import Layout from "./components/Layout";

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
