import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import SingleUser from "./pages/singleUser/SingleUser";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import NewProduct from "./pages/newProduct/NewProduct";
function App() {
  return (
    <>
      <Topbar />
      <div className="AppContainer">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<SingleUser />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<SingleProduct />} />
          <Route path="/newProduct" element={<NewProduct />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
