// import { Route, Routes, Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { SharedLayout } from "components/SharedLayout";

import { Home } from "pages/Home";
const About = lazy(() => import("pages/About"));
const Mission = lazy(() => import("components/Mission"));
const Team = lazy(() => import("components/Team"));
const Reviews = lazy(() => import("components/Reviews"));
const Products = lazy(() => import("pages/Products"));
const ProductDetails = lazy(() => import("pages/ProductDetails"));
const NotFound = lazy(() => import("pages/NotFound"));
const TestError = lazy(() => import("pages/TestError"));

export const App = () => {
  return (
    // <div>
    //   <nav>
    //     <Link to="/">Home</Link>
    //     <Link to="/about">About</Link>
    //     <Link to="/products">Products</Link>
    //     <Link to="/testerror">TestError</Link>
    //   </nav>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />          
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="/" element={<TestError />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    // </div>
  );
};



// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
