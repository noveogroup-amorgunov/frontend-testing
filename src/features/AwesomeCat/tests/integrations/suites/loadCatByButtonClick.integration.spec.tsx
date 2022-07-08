import axios from 'axios';
import { AwesomeCat } from 'features/AwesomeCat';
import { step, mountComponent } from 'tests/integrationHelpers';
import { awesomeCatPO as PO } from '../po/awesomeCatPO';

jest.mock('axios');

function mockGiphyRequst() {
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  mockedAxios.get.mockResolvedValue({
    data: {
      data: [{ images: { downsized_large: { url: 'mocked.png'} }}]
    },
  });
}

describe('feature/Сat', () => {
  it('должен при нажатии на кнопку загружать нового кота', async () => {
      await step('Монтируем компонент', () => {
        mountComponent({
          Component: AwesomeCat,
        });
      });

      mockGiphyRequst();

      await step('Кликаем по кнопке "Give me a cat"', () => {
        PO.clickToButton();
      });

      await step('Ждем завершение загрузки', async () => {
        expect(PO.getLoader()).toBeInTheDocument();

        await PO.waitForLoaderHide();
      });

      await step('Проверяем появление гифки на странице', () => {
        expect(PO.getImage()).toBeInTheDocument();
        expect(PO.getImage()).toHaveAttribute('src', 'mocked.png');
      });
  });
});
