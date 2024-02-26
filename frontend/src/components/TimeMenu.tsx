interface Props {
  handleTime: (e: React.MouseEvent<HTMLLIElement>) => void
  time: number
}

export function TimeMenu({ handleTime, time }: Props) {
  return (
    <nav>
      <ul className="flex font-semibold my-5">
        <li
          onClick={handleTime}
          className={`cursor-pointer text-xs font-semibold tracking-wider rounded-l-xl border-2 border-[#2b2b2c] px-3 py-1 flex transition duration-500 ease-in-out ${
            time === 15
              ? "bg-[#d8a0a6] hover:bg-[#e7afb5]"
              : "bg-[#4d4852] hover:bg-[#655d6d]"
          }`}
        >
          15
        </li>
        <li
          onClick={handleTime}
          className={`cursor-pointer text-xs font-semibold tracking- border-t-2 border-b-2 border-[#2b2b2c] px-3 py-1 flex transition duration-500 ease-in-out ${
            time === 60
              ? "bg-[#d8a0a6] hover:bg-[#e7afb5]"
              : "bg-[#4d4852] hover:bg-[#655d6d]"
          }`}
        >
          60
        </li>
        <li
          onClick={handleTime}
          className={`cursor-pointer text-xs font-semibold tracking-wider rounded-r-xl border-2 border-[#2b2b2c] px-3 py-1 flex transition duration-500 ease-in-out ${
            time === 120
              ? "bg-[#d8a0a6] hover:bg-[#e7afb5]"
              : "bg-[#4d4852] hover:bg-[#655d6d]"
          }`}
        >
          120
        </li>
      </ul>
    </nav>
  )
}
