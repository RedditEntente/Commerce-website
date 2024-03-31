import './directory-item.styles.scss';
import { Link } from 'react-router-dom';
const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
 
  const link = "/shop/" + (String(title))
  return (
    <div className='directory-item-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <Link to = {link} className='body'>
        <h2>{title}</h2>
        <span >Shop Now</span>
      </Link>
    </div>
  );
};

export default DirectoryItem;