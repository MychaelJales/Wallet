export const getCurrencies = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const json = await response.json();
  const data = await Object.keys(json);
  const respon = await data.filter((res) => res !== 'USDT');
  const currencies = await respon.filter((res) => res !== 'DOGE');
  /* return response.ok ? Promise.resolve(currencies) : Promise.reject(currencies); */
  return currencies;
};

export const getExchangeRates = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const json = await response.json();
  /* return response.ok ? Promise.resolve(currencies) : Promise.reject(currencies); */
  return json;
};
