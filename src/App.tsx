import Layout from "./Layout/Layout";
import { Categories } from "./components/categoriesComponent";
import { Spotlight } from "./components/spotlightComponent";
import { FlashSales } from "./components/today.component";
import "./css/App.css";

const App = () => {
  return (
    <Layout>
      <FlashSales />
      <hr />
      <Categories />
      <Spotlight />
    </Layout>
  );
};

export default App;
