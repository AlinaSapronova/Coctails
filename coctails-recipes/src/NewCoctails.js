function NewCoctails({ label, image, ingredientLines }){
    return(
        <div className="coctailContainer">
        <div className="container">
        <h2>{label}</h2>
        <img src={image} alt="drink"/>
        <ul>
            {ingredientLines.map((ingridient, index) => {
                return(
                <li key={index}>✓ {ingridient}</li>
            )})}
        </ul>
       </div>
            </div>
        )
}
export default NewCoctails;