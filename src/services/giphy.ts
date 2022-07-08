import axios from 'axios';

const sleep = (ms: number = 500) => new Promise(r => setTimeout(r, ms));

/**
 * Метод для получения gif по ключевому слову
 * https://developers.giphy.com/docs/api/endpoint#search
 */
export async function getGiphy(q: string): Promise<string[]> {
    const endpoint = 'https://api.giphy.com/v1/gifs/search';
    const offset = Math.ceil(Math.random() * 400);

    await sleep();

    return axios.get(endpoint, {
        params: { api_key: process.env.REACT_APP_GIPHY_API_KEY, q, limit: 10, offset }
    }).then(response => {
      return response.data.data
          .map((item: any) => item?.images.downsized_large.url)
          .filter(Boolean)
    });
};
