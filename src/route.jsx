import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import IndexPage from "./pages/IndexPage";
import ProductPage from "./pages/ProductPage";
import PaymentPage from "./pages/PaymentPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: "product/:id",
        element: <ProductPage />,
      },
      {
        path: "product/:id/payment/",
        element: <PaymentPage />,
      },
    ],
  },
  {
    path: "*",
    element: <div>404 Not found</div>,
  }
]);

export default router;