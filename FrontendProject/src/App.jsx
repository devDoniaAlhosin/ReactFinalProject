import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./Components/Layout/Layout";
import { Auth } from "./Pages/Auth/Auth";
import { ProductsPage } from "./Pages/ProductsPage/ProductsPage";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { store } from "./Store/store";
import { WishList } from "./Pages/WishListPage/WishList";
import { HomePage } from "./Pages/Home/HomePage";
import { SingleProduct } from "./Pages/SingleProduct/SingleProduct";
import { Cart } from "./Pages/Cart/Cart";
import { UserAuthProvider } from "./utilies/UserAuth";
import ReactProtected from "./Components/ReactProtected/ReactProtected";
import { NotFound } from "./Pages/NotFoundPage/NotFound";
import { ScrollToTheTopWrapper } from "./Components/ScrollToTop/ScrollToTheTopWrapper";

function App() {
  const [count, setCount] = useState(0);
  const Routing = createBrowserRouter([
    { path: "", element: <Auth /> },
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/home",
          element: (
            <ScrollToTheTopWrapper>
              <ReactProtected>
                <HomePage />
              </ReactProtected>
            </ScrollToTheTopWrapper>
          ),
        },
        {
          path: "/product/:id",
          element: (
            <ScrollToTheTopWrapper>
              <ReactProtected>
                <SingleProduct />
              </ReactProtected>
            </ScrollToTheTopWrapper>
          ),
        },
        {
          path: "/cart",
          element: (
            <ReactProtected>
              <Cart />
            </ReactProtected>
          ),
        },
        {
          path: "/wishList",
          element: (
            <ReactProtected>
              <WishList />
            </ReactProtected>
          ),
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={Routing} />
    </Provider>
  );
}

export default App;
