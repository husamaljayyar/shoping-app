import { lazy, Suspense } from "react";
import { Route, Routes, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/NavBar/Navbar";
import PageNotFound from "./Screens/Guest/PageNotFound/PageNotFound";
import Register from "./Screens/Auth/Register/Register";
import ProfileScreen from "./Screens/User/ProfileScreen/ProfileScreen";
import Login from "./Screens/Auth/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import LoadingPage from "./components/LoadingPage/LoadingPage";

const HomeScreen = lazy(() => import("./Screens/Guest/HomeScreen/HomeScreen"));

const Orders = lazy(() => import("./Screens/User/ReviewOrder/Orders"));

const ProductScreen = lazy(() =>
  import("./Screens/Guest/ProductScreen/ProductScreen")
);

const SearchScreen = lazy(() =>
  import("./Screens/Guest/SearchScreen/SearchScreen")
);

const CartScreen = lazy(() => import("./Screens/User/CartScreen/CartScreen"));

const PlaceOrder = lazy(() => import("./Screens/User/ReviewOrder/PlaceOrder"));

const ReviewOrder = lazy(() =>
  import("./Screens/User/ReviewOrder/ReviewOrder")
);

function App() {
  const user = useSelector((state) => state.userDetails.user.user);

  return (
    <>
      <Navbar />

<div className="">
<Routes>
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfileScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <Suspense fallback={<LoadingPage />}>
              <HomeScreen />
            </Suspense>
          }
        />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/product/:productId"
          element={
            <Suspense fallback={<LoadingPage />}>
              <ProductScreen />
            </Suspense>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Suspense fallback={<LoadingPage />}>
                <Orders />
              </Suspense>
            </ProtectedRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <Suspense fallback={<LoadingPage />}>
              <CartScreen />
            </Suspense>
          }
        />

        <Route
          path="/placeOrder"
          element={
            <ProtectedRoute>
              <Suspense fallback={<LoadingPage />}>
                <PlaceOrder />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route
          path="/order/:orderId"
          element={
            <ProtectedRoute>
              <Suspense fallback={<LoadingPage />}>
                <ReviewOrder />
              </Suspense>
            </ProtectedRoute>
          }
        />

        <Route
          path="/search"
          element={
            <Suspense fallback={<LoadingPage />}>
              <SearchScreen />
            </Suspense>
          }
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
</div>
    </>
  );
}

export default App;
