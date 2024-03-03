export function Footer() {
  return (
    <footer className="w-screen p-6 max-w-[1150px] select-none mt-auto">
      <nav className="flex items-center justify-between">
        <ul className="flex text-sm tracking-wider font-semibold text-gradient1">
          <li className="mr-10 cursor-pointer">
            <a className="flex hover:text-text transition-all duration-200">
              <svg
                className="w-[16px] h-[16px] mt-[3px] mr-[1.5px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 125"
              >
                <polygon
                  fill="currentColor"
                  points="60,90 60,30 30,30 30,40 40,40 40,90 30,90 30,100 70,100 70,90  "
                />
                <circle fill="currentColor" cx="50" cy="10" r="10" />
              </svg>
              About
            </a>
          </li>
          <li className="mr-8 cursor-pointer">
            <a className="flex hover:text-text transition-all duration-200">
              <svg
                className="w-[13px] h-[13px] mr-2 mt-[4.5px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 0.615 0.55"
              >
                <path
                  fill="currentColor"
                  d="M0.007 0.433l0 0zm0 -0.426l0 0zm-0.007 0.05l0.307 0.184 0.308 -0.184 0 -0.034c0,-0.006 -0.003,-0.012 -0.007,-0.016l0 0c-0.004,-0.004 -0.01,-0.007 -0.016,-0.007l-0.569 0c-0.006,0 -0.012,0.003 -0.016,0.007 -0.004,0.004 -0.007,0.01 -0.007,0.016l0 0.034zm0.023 0.383l0.569 0c0.006,0 0.012,-0.003 0.016,-0.007l0 0c0.004,-0.004 0.007,-0.01 0.007,-0.016l0 -0.313 -0.297 0.178c-0.006,0.004 -0.014,0.005 -0.021,0.001l-0.297 -0.179 0 0.313c0,0.006 0.003,0.012 0.007,0.016 0.004,0.004 0.01,0.007 0.016,0.007z"
                />
              </svg>
              Contact
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              className="flex hover:text-text transition-all duration-200"
              target="_blank"
              href="https://github.com/nutaptap/codetype"
            >
              <svg
                className="w-[26px] h-[26px] mr-[3px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 125"
              >
                <g transform="translate(0,-957)">
                  <path
                    fill="currentColor"
                    d="m 56.3125,974.33468 a 4.0004,4.0004 0 0 0 -3.6875,3 l -13,48.00002 a 4.0139288,4.0139288 0 1 0 7.75,2.0938 l 13,-48.00007 a 4.0004,4.0004 0 0 0 -4.0625,-5.09375 z m -23.3125,5 a 4.0004,4.0004 0 0 0 -2.4688,0.90625 l -23.9999997,19 a 4.0004,4.0004 0 0 0 0,6.28127 l 23.9999997,19 a 4.0004,4.0004 0 1 0 4.9376,-6.2813 L 15.4375,1002.3972 35.4688,986.52218 A 4.0004,4.0004 0 0 0 33,979.33468 z m 33.9062,0 a 4.0004,4.0004 0 0 0 -2.375,7.1875 l 20.0313,15.87502 -20.0313,15.8437 a 4.0004,4.0004 0 1 0 4.9376,6.2813 l 24,-19 a 4.0004,4.0004 0 0 0 0,-6.28127 l -24,-19 a 4.0004,4.0004 0 0 0 -2.5626,-0.90625 z"
                  />
                </g>
              </svg>
              Github
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
