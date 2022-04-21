import { render } from "@testing-library/react";
import { MoneyCard } from ".";
import { DOWN_ARROW, TOTAL, UPPER_ARROW } from "../../../../assets";

describe("MoneyCard types renders correctly", () => {
  test("Incomes renders correctly", () => {
    const { getByText } = render(
      <MoneyCard label="Incomes" type="incomes" shouldHighlight={false} />
    );
    const image = document.querySelector("img") as HTMLImageElement;

    expect(image.src).toContain(UPPER_ARROW);
    expect(getByText("Incomes")).toBeInTheDocument;
  });

  test("Outcomes renders correctly", () => {
    const { getByText } = render(
      <MoneyCard label="Outcomes" type="outcomes" shouldHighlight={false} />
    );
    const image = document.querySelector("img") as HTMLImageElement;

    expect(image.src).toContain(DOWN_ARROW);
    expect(getByText("Outcomes")).toBeInTheDocument;
  });

  test("Total renders correctly", () => {
    const { getByText } = render(
      <MoneyCard label="Total" type="total" shouldHighlight={true} />
    );
    const image = document.querySelector("img") as HTMLImageElement;

    expect(image.src).toContain(TOTAL);
    expect(getByText("Total")).toBeInTheDocument;
  });
});
