import { useState } from "react"
import { Link } from "react-router-dom"
import { Theme } from "./Theme"

export function Header({
  switchTheme,
}: {
  switchTheme: (theme: string) => void
}) {
  const [modalOpen, setModalOpen] = useState(false)
  function toggleModal() {
    setModalOpen(!modalOpen)
  }
  return (
    <>
      <header className="w-screen p-6 max-w-[1150px] flex items-center justify-between mx-auto">
        <Link to="/" className="flex items-center select-none cursor-pointer0">
          <span className="text-3xl mr-[2px] text-main">&lt;</span>
          <svg
            className="w-6 h-6 text-main"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M 7 3 C 4.8 3 3 4.8 3 7 L 3 25 C 3 27.2 4.8 29 7 29 L 25 29 C 27.2 29 29 27.2 29 25 L 29 7 C 29 4.8 27.2 3 25 3 L 7 3 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 12.400391 12 L 12.400391 19.599609 L 20 19.599609 L 20 12 L 12.400391 12 z"
            ></path>
          </svg>
          <span className="text-3xl  ml-[2px] text-main">&gt;</span>
          <span className="text-3xl pb-[6px] tracking-wide ml-2 text-primary">
            codekey
          </span>
        </Link>
        <nav className="flex">
          <div>
            <div className="scores flex items-center text-xs font-semibold tracking-widest rounded-2xl  bg-main px-[2px] py-[2px] mr-6">
              <button className="scores-button flex items-center text-xs font-semibold tracking-widest rounded-xl  bg-main px-3 py-1">
                <svg
                  className="w-4 h-4 text-text mr-[2px]"
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
            </div>
          </div>
          <button
            onClick={toggleModal}
            className="text-sub hover:text-text transition-all duration-200"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
              />
            </svg>
          </button>
        </nav>
      </header>
      {modalOpen && (
        <Theme switchTheme={switchTheme} toggleModal={toggleModal} />
      )}
    </>
  )
}
