import React, { useState, useRef, useCallback } from 'react';
import axios from "axios";
import Search from "./components/Search";
import Detail from "./components/Detail";
import "./App.css";

function App() {
    const [state, setState] = useState({
        s: "",
        results: [],
        isloading:false,
        error:null,
        selected: {},
    });
    
    const inputRef = useRef(null);
    const searchQuery = useRef(state.s);
    
    // 使用与官网一致的OMDB数据API
    const apiUrl = "http://www.omdbapi.com/?apikey=18e4e4ee";
    
    // 防抖函数
    const debounce = useCallback((fn, delay) => {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
      };
    }, []);
    
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        performSearch();
      }
    };

    const SearchInput = (e) => {
      let s = e.target.value;
      searchQuery.current = s;
      setState((prevState) => ({ ...prevState, s }));
    };
    
    const performSearch = () => {
      const query = searchQuery.current.trim();
      if (query) {
        // start loading state
        setState((prevState )=>({...prevState,loading:true,error:null}));
        axios(`${apiUrl}&s=${query}`)
          .then(({ data }) => {
            let results = data?.Search || [];
            setState((prevState) => ({ ...prevState, results ,loading:false}));
          })
          .catch(error => {
            console.error("Search error:", error);
            setState((prevState) => ({ ...prevState, results: [],
              isloading:false,error:"error" + error.message
            }));
          });
      }
    };
    
    const debouncedSearch = useCallback(debounce(performSearch, 500), [debounce]);



    const search = debounce(performSearch, 500);

    const openDetail = (id) => {
        axios(apiUrl + "&i=" + id).then(({ data }) => {
            let result = data;

            setState((prevState) => {
                return { ...prevState, selected: result };
            });
        });
    };

    const closeDetail = () => {
        setState((prevState) => {
            return { ...prevState, selected: {} };
        });
    };

    return(
<div className="App">
<header className='App-header'>
  <h1>Movie Media</h1>
</header>
<main>
<Search
  SearchInput={SearchInput}
  search={debouncedSearch}
/>
  {state.isloading && <p>正在搜索...</p>}
  {state.error && <p  style={{color:"red"}} >{state.error}</p>}
<div className='Container'>

  {state.results.map((e) => (
    <div
      key={e.imdbID}
      className='item'
      onClick={() => openDetail(e.imdbID)}
    >
      <img
        style={{ width: "200px" }}
        src={e.Poster}
        alt={e.Title}
      />
      <h3 style={{ color: "white" }}>{e.Title}</h3>
      {typeof state.selected.Title !== "undefined" && (
        <Detail
          selected={state.selected}
          closeDetail={closeDetail}
        />
      )}
    </div>
  ))}
</div>
</main>
</div>
);
}

export default App;