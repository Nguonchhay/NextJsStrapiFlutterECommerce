import CategoryQuickView from "./CategoryQuickView";
import QuickSearch from "./QuickSearch";
import QuickContact from "./QuickContact";
import Image from "next/image";

export default function HomeBanner() {
  return (
    <section className="flex w-full px-[7rem] bg-white pt-3">
      <div className="w-3/12">
        <CategoryQuickView />
      </div>
      <div className="w-9/12">
        <div className="flex">
            <div className="w-8/12">
                <QuickSearch />
            </div>
            <div className="w-3/12">
                <QuickContact />
            </div>
        </div>
        <div className="relative mt-5">
            <Image src="/images/banner.webp" width={750} height={380} alt="Banner"/>
            <div className="absolute top-0 left-0">
                <div className="flex flex-col justify-center w-[300px] h-[370px] pl-16">
                    <span className="uppercase font-bold text-orange-400">Fruit Fresh</span>
                    <h2 className="font-extrabold text-[2rem]">
                        Vegetable <br/>100% Organic
                    </h2>
                    <p className="text-xs text-gray-600">Free Pickup and Delivery Available</p>
                    <a href="#" className="w-max mt-7 uppercase text-sm font-extrabold text-white bg-orange-400 p-2 px-6">Shop Now</a>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}
