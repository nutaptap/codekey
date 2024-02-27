import { describe, test, expect } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"
import { TypingTest } from "../components/TypingTest"

describe("<TypingTest />", () => {
  test("Time menu renders when timer has not started", () => {
    const { getByRole } = render(
      <Router>
        <TypingTest />
      </Router>
    )
    const timeMenu = getByRole("navigation")
    expect(timeMenu).toBeTruthy()
  })

  test("Time menu is not rendered after starting the test", () => {
    const { queryByRole } = render(
      <Router>
        <TypingTest />
      </Router>
    )

    fireEvent.keyDown(window, { key: "a" })

    const timeMenu = queryByRole("navigation")
    expect(timeMenu).toBeFalsy()
  })
})
