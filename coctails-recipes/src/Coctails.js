import { useState } from "react";
import { coctails } from "./data"

function Coctails(){
    const [myCoctails, setMyCoctails] = useState(coctails)

    return(
        <div className="main">
                
                {myCoctails.map(item => {
                    const{ id, name, image, ingredients} = item
                    return(
                        <div key={id} className="container">
                            <h2>{name}</h2>
                            <img src={image} alt="coctail"/>
                            <ul>For One Serving:
                                {ingredients.map((element,index) => (
                                    <li key={index}>{element}</li>
                                ))}
                            </ul>
                        </div>
                    )
                })}
     
        </div>

    )
}
export default Coctails;