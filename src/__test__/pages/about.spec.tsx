import { render } from "@testing-library/react";
import AboutPage from "@/pages/about";

describe("About Page", () => {
  it("renders About Page", () => {
    const page = render(<AboutPage />);
    // console.log(screen.getByTestId("title"));
    expect(page).toMatchSnapshot();
  });
});
