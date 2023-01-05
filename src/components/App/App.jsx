import { Route, Routes } from "react-router-dom";
import { About } from "pages/About";
import { Home } from "pages/Home";
import { SharedLayout } from "components/SharedLayout";
import { Mission } from "components/Mission";
import { Team } from "components/Team";
import { Reviews } from "components/Reviews";
import { Products } from "pages/Products";
import { ProductDetails } from "pages/ProductDetails";

export const App = () => {
  return (
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
      </Route>
    </Routes>
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
