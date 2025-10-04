import { useParams } from 'react-router-dom';
const ProductPage=()=>{
      const params = useParams();
      
    return(<div>
 <h1>პროდუქტი ID: {params.id}</h1>
    </div>)
}

export default ProductPage