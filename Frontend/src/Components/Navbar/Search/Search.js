import React from 'react'
import { useState, useEffect } from 'react';
import "./Search.css";
function Search() {
    const [datas, setDatas] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    

     
    useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => setDatas(json));
    }, []);
  
    const handleSearchTerm = (e) => {
    
      let value = e.target.value;
      setSearchTerm(value);
    };

    console.log(searchTerm);

  return (
    <>
    <div className="searchBar">
        <input type="text" name="searchBar" id="searchBar" placeholder='Rechercher' onChange={handleSearchTerm}></input>
    </div>
    <div className="search-results">
        {datas
        .filter((val) => {
            return val.title.toLowerCase().includes(searchTerm.toLowerCase());
        })
        
        .map((val) => {
          return (
                <div className="search__result" key={val.id}>
                    {val.title}
                </div>
                );
        })}
    </div>
    </>

  );
};

export default Search;