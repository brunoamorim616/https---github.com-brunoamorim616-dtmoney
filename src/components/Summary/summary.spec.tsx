import { render } from "@testing-library/react";
import { Summary } from ".";

test("Summary renders correctly", () => {
  const { getByText } = render(<Summary />, {});
  expect(getByText("Outcomes")).toBeInTheDocument;
  expect(getByText("Incomes")).toBeInTheDocument;
  expect(getByText("Total")).toBeInTheDocument;
});
