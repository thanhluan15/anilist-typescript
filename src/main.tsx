/** @format */

import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AnimeProvider from "./contexts/AnimeContext";
import SearchProvider from "./contexts/SearchContext";
import "./index.css";

const client = new QueryClient();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <ReactQueryDevtools />
      <BrowserRouter>
        <SearchProvider>
          <AnimeProvider>
            <App />
          </AnimeProvider>
        </SearchProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
