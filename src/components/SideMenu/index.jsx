import React, { useState, useEffect, useContext } from 'react';
// import { useHistory, useParams } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { getCategories } from '../../services/api';
import MainContext from '../../Context/MainContext'
import './style.css';
import Loading from '../Loading/Loading';

export default function MainCards() {
  // const history = useNavigate();
  const navigate = useNavigate();
  const {
    selectedListItems,
    setSelectedListItems,
    setSearchItem,
    setCategorySelected
  } = useContext(MainContext);

  const [listitems, setlistitems] = useState([]);

  function loadCategoryPage(itemId, itemName) {
    // console.log(itemId);
    setSearchItem('');
    setSelectedListItems(itemId);
    setCategorySelected(itemName);
    // history.push(`/category`);
    navigate(`/category`);
  }

  function setClassName(itemId) {
    if(selectedListItems === itemId) {
      // return 'side-item-container-selected';
      return 'side-item-container selected';
    }
    return 'side-item-container';
  }

  function renderItems(){
    if(!listitems){
      return <Loading />
    }
    
    return listitems.map((item, index) => {
      return (
        <div 
        // className="side-item-container"
        className={setClassName(item.id)}

        key={index}
          // onClick={() => console.log(item)}
          onClick={() => loadCategoryPage(item.id, item.name)}
        >
          <div
            className="side-item-text"
          >
            <h1>{item.name}</h1>
          </div>

          <div className="side-item-separator"></div>
        </div>
      )
    });
  };
  
  useEffect(() => {
    async function getitems(){
      const result = await getCategories();
      const resultFiltered = result.filter((category) => category.name !== 'Serviços');
      setlistitems(resultFiltered);
    }
    getitems();
  }, []);

  // -----------------------------
  // does not work
  // async function fetchitems(){
  //   const result = await getCategories();
  //   console.log('result', result);
  //   console.log(typeof result);
  //   return result
  // };
  
  // useEffect(() => {
  //   const result = fetchitems();
  //   setlistitems(result);
    
  //   console.log('useEffect');
  // }, []);
  // -----------------------------
    
  return (
    <div className="side-menu-container">
      { renderItems() }
    </div>
  )
};
