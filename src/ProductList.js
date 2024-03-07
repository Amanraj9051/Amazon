import Card from './Card'
import './css/productlist.scss'
import { useStateValue } from './StateProvider'
const ProductList = () => {
   const { initialState } = useStateValue();
//  console.log("lll",initialState)
  return  <div className="productList">
   {
    initialState.ProductList.map((item, index) => <Card key={index} {...item}/>)
   }
   
                    
    </div> 
  
}

export default ProductList;