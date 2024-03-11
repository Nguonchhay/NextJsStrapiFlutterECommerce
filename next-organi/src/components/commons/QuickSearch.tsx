export default function QuickSearch() {
  return (
    <form className="w-[95%] inline-flex justify-between items-center border border-gray-200">
      <div className="">
        <select className="form-select border-0 font-bold">
          <option value="all" defaultValue="all">All Categories</option>
        </select>
      </div>
      <div className="text-gray-200">|</div>
      <div className="">
        <input type="text" className="form-input border-0" placeholder="What do you want?" />
      </div>
      <div className="">
        <button type="submit" className="form-input border-0 text-white bg-orange-400">Search</button>
      </div>
    </form>
  )
}
