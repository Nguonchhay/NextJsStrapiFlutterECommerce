import CategoryQuickView from "./CategoryQuickView";
import QuickSearch from "./QuickSearch";
import QuickContact from "./QuickContact";

export default function HomeBanner() {
  return (
    <section className="flex w-full px-[7rem] bg-white pt-3">
      <div className="w-3/12">
        <CategoryQuickView />
      </div>
      <div className="w-6/12">
        <QuickSearch />
      </div>
      <div className="w-3/12">
        <QuickContact />
      </div>
    </section>
  )
}
