import { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { HiSwitchHorizontal } from 'react-icons/hi';

function App() {
  const [info, setInfo] = useState({});
  const [input, setInput] = useState('');
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(null);
  const [error, setError] = useState('');

  // 获取货币汇率数据
  useEffect(() => {
    Axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`)
      .then((res) => {
        setInfo(res.data[from]);
      })
      .catch((error) => {
        console.error("Failed to fetch currency data:", error);
      });
  }, [from]);

  // 设置选项并转换
  useEffect(() => {
    if (Object.keys(info).length > 0) {
      const currencyCodes = Object.keys(info);
      setOptions(currencyCodes);
      convert(); // 初始转换
    }
  }, [info]);

  function convert() {
    const inputValue = parseFloat(input);
    if (isNaN(inputValue)) {
      setError('请输入有效的数字');
      setOutput(null);
      return;
    }
    console.log('From:',from);
    console.log('To:',to);
    console.log('Info',info);

  if (!info) {
    console.error('❌ info 是 null 或 undefined');
    setError('数据未加载完成，请稍等');
    setOutput(null);
    return;
  }

  if (!(from in info)) {
    console.error(`❌ info 中不存在 "${from}"`);
    setError(`找不到 ${from.toUpperCase()} 的汇率数据`);
    setOutput(null);
    return;
  }

  if (!(to in info)) {
    console.error(`❌ info 中不存在 "${to}"`);
    setError(`找不到 ${to.toUpperCase()} 的汇率数据`);
    setOutput(null);
    return;
  }

  if (typeof info[from] !== 'number' || typeof info[to] !== 'number') {
    console.error('❌ from 或 to 的值不是数值类型');
    setError('无效的汇率格式');
    setOutput(null);
    return;
  }
    console.log("开始计算");
    const inputused=inputValue*info[from]
    const rateUsd=info[to];
    console.log("计算完成");
    setOutput((inputused/rateUsd).toFixed(6));
    setError('');
  }

  function flip() {
    const temp = from;
    setFrom(to);
    setTo(temp);
  }

  return (
    <div className='App'>
      <div className='heading'>
        <h1>Currency Converter</h1>
      </div>
      <div className='Container'>
        <div className='left'>
          <h3>Amount</h3>
          <input
            type="text"
            placeholder='Enter the amount'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className='middle'>
          <h3>From</h3>
          <Dropdown
            options={options.map(code => code.toUpperCase())}
            onChange={(selectedOption) => setFrom(selectedOption.value.toLowerCase())}
            value={from.toUpperCase()}
            placeholder="Select From Currency"
          />
        </div>

        <div className='switch'>
          <HiSwitchHorizontal
            size="30px"
            onClick={flip}
          />
        </div>

        <div className='right'>
          <h3>To</h3>
          <Dropdown
            options={options.map(code => code.toUpperCase())}
            onChange={(selectedOption) => setTo(selectedOption.value.toLowerCase())}
            value={to.toUpperCase()}
            placeholder="Select To Currency"
          />
        </div>
      </div>

      <div className='Result'>
        <button onClick={convert}>Convert</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {output !== null && (
          <p>{input} {from.toUpperCase()} = {output} {to.toUpperCase()}</p>
        )}
      </div>
    </div>
  );
}

export default App;