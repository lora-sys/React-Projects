import React, { useEffect, useState } from 'react';
import Map from './components/Map';
import axios from 'axios';

const App = () => {
    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);

    useEffect(() => {
        // 使用 IP API 获取用户位置
        axios.get('https://ipapi.co/json/')
            .then(response => {
                setLat(response.data.latitude);
                setLon(response.data.longitude);
            })
            .catch(error => {
                console.error('Error fetching IP location:', error);
            });
    }, []);

    return (
        <div className="App">
            <h1>IP 地址定位</h1>
            <Map lat={lat} lon={lon} />
        </div>
    );
};

export default App;