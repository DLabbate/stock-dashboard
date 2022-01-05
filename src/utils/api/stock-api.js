export const searchSymbol = async (query) => {
  const url = `https://finnhub.io/api/v1/search?q=${query}&token=${process.env.REACT_APP_API_KEY}`;
  const response = await fetch(url);
  return await response.json();
};

export const fetchStockDetails = async (stockSymbol) => {
  const url = `https://finnhub.io/api/v1/stock/profile2?symbol=${stockSymbol}&token=${process.env.REACT_APP_API_KEY}`;
  const response = await fetch(url);
  return await response.json();
};

export const quoteStock = async (stockSymbol) => {
  const url = `https://finnhub.io/api/v1/quote?symbol=${stockSymbol}&token=${process.env.REACT_APP_API_KEY}`;
  const response = await fetch(url);
  return await response.json();
};
