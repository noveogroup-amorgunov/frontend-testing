import { queryByTestId, waitForElementToBeRemoved } from '@testing-library/dom';
import { buttonPO } from 'components/Button/Button.po';

export const awesomeCatPO = {
  root: '[data-tid="awesome-cat"]',

  clickToButton() {
    return buttonPO.click();
  },

  getImage() {
    return queryByTestId(document.body, "image")
  },

  getLoader() {
    return queryByTestId(document.body, "loader")
  },

  async waitForLoaderHide() {
    await waitForElementToBeRemoved(() => {
      return this.getLoader();
    });
  },

  isLoading() {
    return queryByTestId(document.body, "image")
  }
}