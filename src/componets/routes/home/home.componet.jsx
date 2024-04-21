
import Directory from "../../directory/directory.componet";

function Home() {
  const categories = [
    {
      "id": 1,
      "title": "hammers",
      "imageUrl": "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 2,
      "title": "screwdrivers",
      "imageUrl": "https://images.unsplash.com/photo-1524224313114-ebd9c49dde82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2NyZXdkcml2ZXJ8ZW58MHx8MHx8fDA%3D"
    },
    {
      "id": 3,
      "title": "drills",
      "imageUrl": "https://images.unsplash.com/photo-1592054286113-649ba108e968?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RHJpbGx8ZW58MHx8MHx8fDA%3D"
    },
    {
      "id": 4,
      "title": "wrenches",
      "imageUrl": "https://images.unsplash.com/photo-1503789146722-cf137a3c0fea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8V3JlbmNofGVufDB8fDB8fHww"
    },
    {
      "id": 5,
      "title": "other tools",
      "imageUrl": "https://plus.unsplash.com/premium_photo-1677702162621-f61d44e676eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFRvb2xzfGVufDB8fDB8fHww"
    }
  ]
  
  return (
    <Directory categories={categories}/>
      
    );
  };

export default Home;
