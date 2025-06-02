import { useEffect, useState } from "react";
import Axios from "axios";
import './App.css';

function App(){
  /*inital varible */
  const [search, setSearch] = useState("");
  const [crypto, setCrypto] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Axios.get('https://openapiv1.coinstats.app/coins', {
      headers: {
        'Authorization': 'Bearer XElyaIwvO8u93q+rYoQHT0ThIRkPL5nP/DUeo+Idqac=',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((res) => {
      console.log(res.data);
      // 修改：从 res.data.result 中提取数据
      setCrypto(res.data.result || []);
      setLoading(false);
    })
    .catch((err) => {
      setError('加载加密货币数据失败，请检查网络或稍后再试');
      setLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <h1>All cryptocurrencies</h1>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button style={{ marginLeft: '10px' }}>Search</button>
      {loading && <p>加载中...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <table>
        <thead>
          <tr>
            <td>Rank</td>
            <td>Name</td>
            <td>Symbol</td>
            <td>Market Cap</td>
            <td>Price Change (1h)</td>
            <td>Price Change (24h)</td>
            <td>Price Change (7d)</td>
            <td>Available Supply</td>
            <td>Volume(24hrs)</td>
          </tr>
        </thead>
        <tbody>
          {
            crypto.filter((val) => {
              return val.name.toLowerCase().includes(search.toLowerCase());
            })
            .map((val, id) => {
              return (
                <tr key={id}>
                  <td className="rank">{val.rank}</td>
                  <td className="logo">
                    <a href={val.websiteUrl}>
                      <img src={val.icon} alt="logo" width="30px" /> 
                    </a>
                    <p>{val.name}</p>
                  </td>
                  <td className="symbol">{val.symbol}</td>
                  <td>₹{val.marketCap}</td>
                  <td>₹{val.price.toFixed(2)}</td>
                  <td>{val.priceChange1h}%</td>
                  <td>{val.priceChange24h}%</td>
                  <td>{val.priceChange7d}%</td>
                  <td>{val.availableSupply}</td>
                  <td>{val.volume.toFixed(0)}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;