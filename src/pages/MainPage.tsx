import { Categories } from "../components/HomeComponents/categoriesComponent";
import { NewArrival } from "../components/HomeComponents/newArrivalComponent";
import { OurProducts } from "../components/HomeComponents/ourProductsComponent";
import { Spotlight } from "../components/HomeComponents/spotlightComponent";
import { FlashSales } from "../components/HomeComponents/today.component";
import { SidebarAndCarousel } from "../components/HomeComponents/SidebarAndCarousel";

const MainPage = () => {
  return (
    <>
      <SidebarAndCarousel />
      <FlashSales />
      <hr />
      <Categories />
      <Spotlight />
      <OurProducts />
      <NewArrival />
    </>
  );
};
export default MainPage;
