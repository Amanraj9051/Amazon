 export const initialState = {
    CartList:[], 
    ProductList:[{
        title:"Acer SB220Q bi 21.5",
        price: '5000',
       rating: '5',
       imageURL:'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg'
       
    },
    {
        title:"All Item",
        price: '1500',
       rating: '1',
       imageURL:'https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Aug23ART/GW/Shop-all-Deals_PC-CC_1X_withoutstripe._SY304_CB599379717_.jpg'
       
    },
    {
        title:"Laptop",
        price: '2500',
       rating: '4',
       imageURL:'https://images-eu.ssl-images-amazon.com/images/G/31/img23/aa23/pdacc/gw/unrec/PC_CC_379x304._SY304_CB599426206_.jpg'
       
    },
    {
        title:"Electronic item",
        price: '3000',
       rating: '4',
       imageURL:'https://images-eu.ssl-images-amazon.com/images/G/31/img19/OOC/Gateway/August_ART/NLB/MOB/Bestoffers/1/sbd/green/1/bau/Desktop_CC021._SY304_CB599069987_.jpg'
       
    },
    {
        title:"Appliances for your home | Up to 55% off",
        price: '4000',
       rating: '3',
       imageURL:'https://images-eu.ssl-images-amazon.com/images/G/31/certified_refurbished/anjaga/AugArt23/AugArtCC/DesktopCC_02._SY304_CB599332264_.jpg'
       
    },
    {
        title:"Smart-Phone",
        price: '8000',
       rating: '1',
       imageURL:'https://m.media-amazon.com/images/I/71C4pfJ7ecL._AC_UL600_FMwebp_QL65_.jpg'
       
       
    },
    {
        title:"Ear-Buds",
        price: '800',
       rating: '3',
       imageURL:'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Sports/GW_Desktop/1199101_379x304_Compressed._SY304_CB448278349_.jpg'
       
    },
    {
        title:"Up to 70% off | Clearance store",
        price: '900',
       rating: '4',
       imageURL:'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg'
       
    }
]
    
 }
 export const reducer = (state, action) => {
    console.log("ok",action.payload );
   switch(action.type){
    case 'ADD_TO_CART':
        return{
            ...state,
            CartList: [...state.CartList, action.payload]
        }
        case 'REMOVE_FROM_CART':
            return{
                ...state,
                CartList: state.CartList.filter(item => item.id !== action.payload)
            }
        default:
            return state;
           
   }
 }