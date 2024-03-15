import "./catergory-item.styles.scss"
const catergoryItem = ({catergory}) => {
    const {imageUrl,title} = catergory;
    return (
        <div className="category-container">
        <div className = "background-image" 
        style={{
          backgroundImage: `url(${imageUrl})`,
        }
        }/>

        
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
        
        
    
        )
      }
        
        
      

    


export default catergoryItem