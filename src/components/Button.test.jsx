import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./button";

describe("Button component", () => {
  it("should render properly", async () => {
    render(<Button name="Sample" />);

    const btn = await screen.findByTestId("button");
    //if the button is rendered
    expect(btn).toBeInTheDocument();

    expect(btn.textContent).toBe("Sample");
    //if the classname is set
    expect(btn.className).toBe("py-2 px-4 border rounded-md");
  });

  it("should be clickable", async () => {
    const onClick = vi.fn();
    render(<Button name="Sample" onClick={onClick} />);

    const btn = await screen.findByTestId("button");
    fireEvent.click(btn);
    expect(onClick).toHaveBeenCalledOnce();
  });
  it("should append classNames", async () => {
    render(<Button name="Sample" className="bg-indigo-500" />);

    const btn = await screen.findByTestId("button");

    expect(btn.className).toBe("bg-indigo-500 py-2 px-4 border rounded-md");
  });
});
