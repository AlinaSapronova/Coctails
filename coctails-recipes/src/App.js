import { useEffect, useState } from 'react';
import './App.css';
// import Coctails from './Coctails';
import video from "./fon.mp4"
import NewCoctails from './NewCoctails';

function App() {

  const myId = "8ed75ea5";
  const key = "47be398a78b6c94e26889f164fd645bf";

  const [searchCoctail,setSearchCoctail] = useState("");
  const [coctailRecipe,setCoctailRecipe] = useState([]);
  const [wordsSubmited,setWordsSubmited] = useState("gin");

  useEffect( () => {
    const getCoctailRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordsSubmited}&app_id=${myId}&app_key=${key}`);
      const result = await response.json();
      console.log(result.hits)
      setCoctailRecipe(result.hits);
  };
    getCoctailRecipe();
  }, [wordsSubmited]);

  const searchCoctailRecipe = (e) => {
    setSearchCoctail(e.target.value);
  }

const submitCoctail = (e) => {
  e.preventDefault();
  setWordsSubmited(searchCoctail);
}


  return (
    <div className="App">
      <div className="App">
        <div className='header'>
      <video autoPlay muted loop>
            <source src={video} type="video/mp4"/>
          </video>
        <h1>Find your favorite Coctail!</h1>
      </div>

      <div className='form'>
        <form onSubmit={submitCoctail}>
          <input 
            className="search"
              placeholder="Search..."
              onChange={searchCoctailRecipe}
              value={searchCoctail}
              ></input> 
              <button className='btn'>FIND</button>
        </form>
      </div>
      </div>



        
        {/* <Coctails/> */}
  



      <div className='coctailContainer'>
        {coctailRecipe.map((item, index) => (
          <NewCoctails
          key={index}
           label={item.recipe.label}
           image={item.recipe.image}
           ingredientLines={item.recipe.ingredientLines}
           />
        ))}
      </div>
      

    
    </div>
  );
}

export default App;
