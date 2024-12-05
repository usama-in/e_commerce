import {shoesAction} from './shoesSlice';
import { bagActions } from './bagSlice';
import { imageActions } from './imagesSlice';
import axios from 'axios';
import { useDispatch } from 'react-redux';


export  const fetchData=()=>{

return async(dispatch)=>{
    const fetch =async ()=>{
        const response = await axios.get('https://e-commerce-f7f6f-default-rtdb.firebaseio.com/.json');
        
        const data= await response.data;
        const arr=  Object.values(data);
        const bagsData=   arr[0].categories.bags;
        const shoesData= arr[0].categories.shoes;
        const imagesData=  arr[0].images;
        dispatch(bagActions.addBags(bagsData))
        dispatch(shoesAction.addShoes(shoesData))
        dispatch(imageActions.setImages(imagesData))
    }
    try{
       await fetch();

    }
    catch(error){
        console.log(error)
    }
}
}