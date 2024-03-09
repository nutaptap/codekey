import { useEffect } from "react"

interface ContactProps {
  toggleModal: () => void
}

export function Contact({ toggleModal }: ContactProps) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const modal = document.getElementById("modal")
      const isClickedOutside = modal && !modal.contains(event.target as Node)
      if (isClickedOutside) {
        toggleModal()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [toggleModal])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-60 z-20 w-screen backdrop-filter backdrop-blur-[1px]">
      <article id="modal" className="absolute z-20 flex flex-col items-end">
        <div className="bg-background rounded-t-lg flex items-center justify-center p-1 px-12 text-lg text-sub pt-4">
          <svg
            className="w-[15px] h-[15px] mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 0.615 0.55"
          >
            <path
              fill="currentColor"
              d="M0.007 0.433l0 0zm0 -0.426l0 0zm-0.007 0.05l0.307 0.184 0.308 -0.184 0 -0.034c0,-0.006 -0.003,-0.012 -0.007,-0.016l0 0c-0.004,-0.004 -0.01,-0.007 -0.016,-0.007l-0.569 0c-0.006,0 -0.012,0.003 -0.016,0.007 -0.004,0.004 -0.007,0.01 -0.007,0.016l0 0.034zm0.023 0.383l0.569 0c0.006,0 0.012,-0.003 0.016,-0.007l0 0c0.004,-0.004 0.007,-0.01 0.007,-0.016l0 -0.313 -0.297 0.178c-0.006,0.004 -0.014,0.005 -0.021,0.001l-0.297 -0.179 0 0.313c0,0.006 0.003,0.012 0.007,0.016 0.004,0.004 0.01,0.007 0.016,0.007z"
            />
          </svg>
          <span>contact</span>
        </div>
        <div className="bg-background rounded-b-lg rounded-l-lg flex flex-col space-y-2 items-center justify-center p-10">
          <p className="mb-4">
            Fel free to send an email to nutaptap@gmail.com <br />
            The buttons below will open your default mail client.
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-4">
            <li>
              <a
                href="mailto:nutaptap@gmail.com?subject=Question"
                className="bg-main flex items-center justify-center p-2 px-4 rounded-lg text-lg select-none cursor-pointer hover:bg-gradient1 duration-200"
              >
                <svg
                  className="w-[25px] h-[25px] mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 7.75C11.3787 7.75 10.875 8.25368 10.875 8.875C10.875 9.28921 10.5392 9.625 10.125 9.625C9.71079 9.625 9.375 9.28921 9.375 8.875C9.375 7.42525 10.5503 6.25 12 6.25C13.4497 6.25 14.625 7.42525 14.625 8.875C14.625 9.58584 14.3415 10.232 13.883 10.704C13.7907 10.7989 13.7027 10.8869 13.6187 10.9708C13.4029 11.1864 13.2138 11.3753 13.0479 11.5885C12.8289 11.8699 12.75 12.0768 12.75 12.25V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V12.25C11.25 11.5948 11.555 11.0644 11.8642 10.6672C12.0929 10.3733 12.3804 10.0863 12.6138 9.85346C12.6842 9.78321 12.7496 9.71789 12.807 9.65877C13.0046 9.45543 13.125 9.18004 13.125 8.875C13.125 8.25368 12.6213 7.75 12 7.75ZM12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
                    fill="currentColor"
                  />
                </svg>
                <span>question</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:nutaptap@gmail.com?subject=Feedback"
                className="bg-main flex items-center justify-center p-2 px-4 rounded-lg text-lg select-none cursor-pointer hover:bg-gradient1 duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] h-[18px] mr-2"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M510.83,480.134l-44.227-137.118c13.946-31.256,21.016-64.585,21.016-99.206C487.619,109.373,378.246,0,243.81,0    S0,109.373,0,243.81s109.373,243.81,243.81,243.81c37.791,0,99.304-10.289,132.754-26.917c0.439-0.244,0.853-0.463,1.292-0.707    l98.865,49.445c3.438,1.707,7.192,2.56,10.898,2.56c5.705,0,11.362-2.024,15.872-5.876    C510.952,499.712,513.829,489.472,510.83,480.134z M341.333,292.571H146.286c-13.483,0-24.381-10.923-24.381-24.381    c0-13.458,10.898-24.381,24.381-24.381h195.048c13.483,0,24.381,10.923,24.381,24.381    C365.714,281.649,354.816,292.571,341.333,292.571z M341.333,195.048H219.429c-13.483,0-24.381-10.923-24.381-24.381    c0-13.458,10.898-24.381,24.381-24.381h121.905c13.483,0,24.381,10.923,24.381,24.381    C365.714,184.125,354.816,195.048,341.333,195.048z"
                  />
                </svg>
                <span>feedback</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:nutaptap@gmail.com?subject=Bug report"
                className="bg-main flex items-center justify-center p-2 px-4 rounded-lg text-lg select-none cursor-pointer hover:bg-gradient1 duration-200"
              >
                <svg
                  className="w-[25px] h-[25px] mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M9.5 5.5L8 3M11 10H13M5 8H7.41797M19 8H16.582M5 16H7.41797M19 16H16.582M11 14H13M5 12H7M19 12H17M14.5 5.5L16 3M12 19C9.23858 19 7 16.7614 7 14V10C7 7.23858 9.23858 5 12 5C14.7614 5 17 7.23858 17 10V14C17 16.7614 14.7614 19 12 19Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>bug report</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:nutaptap@gmail.com?subject=Business inquiry"
                className="bg-main flex items-center justify-center p-2 px-4 rounded-lg text-lg select-none cursor-pointer hover:bg-gradient1 duration-200"
              >
                <svg
                  className="w-[20px] h-[20px] mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <rect width="24" height="24" fill="transparent" />
                  <path
                    fill="currentColor"
                    d="M10 2C8.34315 2 7 3.34315 7 5V6L5.96802 6C5.52938 5.99999 5.15087 5.99998 4.83762 6.02135C4.50779 6.04385 4.17788 6.09336 3.85195 6.22836C3.11687 6.53284 2.53285 7.11687 2.22837 7.85195C2.09336 8.17788 2.04386 8.50779 2.02135 8.83762C1.99998 9.15087 1.99999 9.52936 2 9.968L2 17.0658C1.99995 17.9523 1.99991 18.7161 2.08215 19.3278C2.17028 19.9833 2.36902 20.6117 2.87868 21.1213C3.38835 21.631 4.0167 21.8297 4.67221 21.9179C5.28387 22.0001 6.04769 22.0001 6.93417 22H17.0658C17.9523 22.0001 18.7161 22.0001 19.3278 21.9179C19.9833 21.8297 20.6117 21.631 21.1213 21.1213C21.631 20.6117 21.8297 19.9833 21.9179 19.3278C22.0001 18.7161 22.0001 17.9523 22 17.0658L22 9.96801C22 9.52936 22 9.15087 21.9787 8.83762C21.9562 8.50779 21.9066 8.17788 21.7716 7.85195C21.4672 7.11687 20.8831 6.53284 20.1481 6.22836C19.8221 6.09336 19.4922 6.04385 19.1624 6.02135C18.8491 5.99998 18.4707 5.99999 18.032 6L17 6V5C17 3.34315 15.6569 2 14 2H10ZM15 6V5C15 4.44772 14.5523 4 14 4H10C9.44772 4 9 4.44772 9 5V6H15ZM10.5 13C10.5 12.4477 10.9477 12 11.5 12H12.5C13.0523 12 13.5 12.4477 13.5 13C13.5 13.5523 13.0523 14 12.5 14H11.5C10.9477 14 10.5 13.5523 10.5 13ZM4.31682 13.3572C4.72018 12.98 5.35299 13.0011 5.73025 13.4045C7.19742 14.9731 9.44753 16 12 16C14.5525 16 16.8026 14.9731 18.2698 13.4045C18.647 13.0011 19.2798 12.98 19.6832 13.3572C20.0865 13.7345 20.1077 14.3673 19.7304 14.7707C17.8704 16.7593 15.0843 18 12 18C8.91574 18 6.12959 16.7593 4.26958 14.7707C3.89232 14.3673 3.91347 13.7345 4.31682 13.3572Z"
                  />
                </svg>
                <span>business inquiry</span>
              </a>
            </li>
          </ul>
        </div>
      </article>
    </div>
  )
}
