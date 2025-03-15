import Layout from "./Layout/Layout";
import { Categories } from "./components/categoriesComponent";
import { NewArrival } from "./components/newArrivalComponent";
import { OurProducts } from "./components/ourProductsComponent";
import { Spotlight } from "./components/spotlightComponent";
import { FlashSales } from "./components/today.component";
import { SidebarAndCarousel } from "./components/SidebarAndCarousel";
import "./css/App.css";

const App = () => {
  return (
    <Layout>
      <SidebarAndCarousel />
      <FlashSales />
      <hr />
      <Categories />
      <Spotlight />
      <OurProducts />
      <NewArrival />
    </Layout>
  );
};

export default App;
