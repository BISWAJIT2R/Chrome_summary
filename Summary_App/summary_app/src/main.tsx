import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { queryclient } from "./lib/Query/Mutation";
import App from "./App.tsx";
import "./index.css";
import ContextHelper from "./context/ContextHelper.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <QueryClientProvider client={queryclient}>
      <ContextHelper>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContextHelper>
    </QueryClientProvider>
  </>
);
