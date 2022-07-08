import { fireEvent, getByTestId } from "@testing-library/dom";

export const buttonPO = {
    root: '[data-tid="awesome-cat"]',

    click() {
      fireEvent.click(getByTestId(document.body, 'button'));
    }
} as const;
