import React from "react";
import loadable from "@loadable/component";
import "./styles/transitions.css";
//import Loading from "./Loading";

import ReactDOM from "react-dom/client";
//import { createRoot } from "react-dom";
import App from "./App";


//import client from "./apollo-client";
import { BrowserRouter, Routes } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import {
  BrowserRouter as Router,
  Route,
  Outlet,
  useNavigate,
} from "react-router-dom";
import LoginForm from "./components/Login";

import { Provider } from "react-redux";
//import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  /*trying out different navbar views*/

    <BrowserRouter>
   
        <React.StrictMode>
          <Routes>
            <Route
              path="/"
              element={<App />}
            />
            
            <Route path="/login" element={<LoginForm />} />
    
            
          </Routes>
        </React.StrictMode>
    </BrowserRouter>

);
