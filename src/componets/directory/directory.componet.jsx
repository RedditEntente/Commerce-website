import CatergoryItem from "../catergory-item/catergory-item.componet"
import "./directory.styles.scss";
const Directory = ({categories}) => {
    return(<div className="directory-container">
    {categories.map((catergory) => (
      <CatergoryItem key ={catergory.id} catergory = {catergory}/>
  

    ) )}
      
      
    </div>)
}
export default Directory