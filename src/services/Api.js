import axios from "axios"

const BASE_URL = "https://api.coingecko.com/api/v3/coins/markets"

const getCrypto = async (pageNumber) => {
    const response = await axios.get(`${BASE_URL}?vs_currency=usd&order=market_cap_desc&per_page=30&page=${pageNumber}&sparkline=false`);
    return response.data
}

export {getCrypto}