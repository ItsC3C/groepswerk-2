import { Categories } from "../components/categoriesComponent";
import { NewArrival } from "../components/newArrivalComponent";
import { OurProducts } from "../components/ourProductsComponent";
import { Spotlight } from "../components/spotlightComponent";
import { FlashSales } from "../components/today.component";
import { SidebarAndCarousel } from "../components/SidebarAndCarousel";

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
