import Layout from "./Layout/Layout";
import { Categories } from "./components/categoriesComponent";
import { FlashSales } from "./components/today.component";
import "./css/App.css";

const App = () => {
  return (
    <Layout>
      <FlashSales />
      <hr />
      <Categories />
      <hr />
    </Layout>
  );
};

export default App;
