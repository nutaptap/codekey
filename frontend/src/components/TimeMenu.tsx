interface Props {
  handleTime: (e: React.MouseEvent<HTMLLIElement>) => void
  time: number
}

export function TimeMenu({ handleTime, time }: Props) {
  return (
    <nav>
      <ul className="flex font-semibold my-2">
        <li
          onClick={handleTime}
          className={`cursor-pointer text-xs font-semibold tracking-wider rounded-l-xl mr-[2px] px-3 py-1 flex transition duration-500 ease-in-out ${
            time === 15
              ? "bg-subAlt hover:bg-sub"
              : "bg-neutral hover:bg-neutralAlt"
          }`}
        >
          15
        </li>
        <li
          onClick={handleTime}
          className={`cursor-pointer text-xs font-semibold tracking-wider px-4 py-1 flex transition duration-500 ease-in-out ${
            time === 60
              ? "bg-subAlt hover:bg-sub"
              : "bg-neutral hover:bg-neutralAlt"
          }`}
        >
          60
        </li>
        <li
          onClick={handleTime}
          className={`cursor-pointer text-xs font-semibold tracking-wider rounded-r-xl ml-[2px] px-3 py-1 flex transition duration-500 ease-in-out ${
            time === 120
              ? "bg-subAlt hover:bg-sub"
              : "bg-neutral hover:bg-neutralAlt"
          }`}
        >
          120
        </li>
      </ul>
    </nav>
  )
}
