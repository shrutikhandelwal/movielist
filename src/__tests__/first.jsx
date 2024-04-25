
import { render, screen } from '@testing-library/react'

const FirstTest = () => {
  return (
    <div>
        <h2> First test </h2>
    </div>
  )
}

test("Example 1 renders successfully", () => {
    render(<FirstTest/>);

    const element = screen.getByText(/first test/i);

    expect(element).toBeInTheDocument;
})
