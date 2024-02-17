export function Header() {
  return (
    <header className="w-screen p-6 max-w-[1150px] flex items-center justify-between mx-auto">
      <div className="flex items-center select-none cursor-pointer">
        <span className="text-3xl mr-[2px] text-[#76689a]">&lt;</span>
        <svg
          className="w-6 h-6 text-[#76689a]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <path
            fill="currentColor"
            d="M 7 3 C 4.8 3 3 4.8 3 7 L 3 25 C 3 27.2 4.8 29 7 29 L 25 29 C 27.2 29 29 27.2 29 25 L 29 7 C 29 4.8 27.2 3 25 3 L 7 3 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 12.400391 12 L 12.400391 19.599609 L 20 19.599609 L 20 12 L 12.400391 12 z"
          ></path>
        </svg>
        <span className="text-3xl  ml-[2px] text-[#76689a]">&gt;</span>
        <span className="text-3xl pb-[6px] tracking-wide ml-2">codetype</span>
      </div>
      <nav className="flex">
        <button className="flex items-center text-xs font-semibold tracking-widest rounded-xl border-2 border-[#76689a] bg-[#76689a] px-3 py-1 mr-6">
          <svg
            className="w-4 h-4 text-[#f1e2e4] mr-[2px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28 28"
          >
            <path
              fill="currentColor"
              d="m21.5669,12.7007l-4.0422,2.0211c-1.213.6064-2.1965,1.59-2.8029,2.8029l-2.0211,4.0421c-.2887.5775-1.1127.5775-1.4015,0l-2.0211-4.0421c-.6064-1.213-1.59-2.1965-2.8029-2.8029l-4.0422-2.0211c-.5775-.2887-.5775-1.1127,0-1.4015l4.0422-2.0211c1.213-.6065,2.1965-1.5901,2.8029-2.803l2.0211-4.0421c.2887-.5775,1.1127-.5775,1.4015,0l2.0211,4.0421c.6064,1.213,1.59,2.1965,2.8029,2.803l4.0422,2.0211c.5775.2887.5775,1.1127,0,1.4015Z"
            />
          </svg>
          SCORES
        </button>
        <button className="text-xs font-semibold tracking-wider rounded-xl border-2 border-[#76689a] bg-[#2b2b2c] px-3 py-2 flex">
          <div className="w-2 h-2 bg-[#f1e2e4] rounded-full mr-2"></div>
          <div className="w-2 h-2 bg-[#76689a] rounded-full mr-2"></div>
          <div className="w-2 h-2 bg-[#d8a0a6] rounded-full"></div>
        </button>
      </nav>
    </header>
  )
}
