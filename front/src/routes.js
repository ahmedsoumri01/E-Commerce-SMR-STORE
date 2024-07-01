import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
   } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import ContactUs from "./pages/contact-us/ContactUs";
const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
         <Route index element={<Home />} />
          <Route path="contact-us" element={<ContactUs />} />
  
      </Route>
    )
  );

  export default router