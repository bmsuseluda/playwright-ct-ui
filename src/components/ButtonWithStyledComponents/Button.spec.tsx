import { expect, test } from "@playwright/experimental-ct-react";
import { Button } from "./Button";

test("Should render a Button with styled components", async ({ mount }) => {
  const component = await mount(<Button>click me</Button>);

  await expect(component).toBeVisible();
  await expect(component).toHaveScreenshot();
});
