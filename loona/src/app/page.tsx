import CardGrid from "./components/card_grid";
import CardGrid2 from "./components/card_grid_2";
import Carousel from "./components/carousel";
import Footer from "./components/footer";
import Header from "./components/header";
import FAQ from "./components/faq";
// import MultiCarousel from "./components/multi_carousel";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen">
      <div className="text-black bg-[#D295FF] p-[5px] w-full flex items-center justify-center px-4">
        <a href=""className="flex items-center gap-1 banner-announce text-white">We are happy to announce Loóna for <img src="/apple.1d07924616a362d2ca8211ac50b73c32.svg" className="inline-block w-2" /> Vision Pro</a>
      </div>

      <Header/>

      <Carousel/>

      <CardGrid/>

      {/* <MultiCarousel/> */}
      
      <CardGrid2/>

      <FAQ/>

      <Footer/>
    </div>
  );
}