import { getDetails, issueTracker,getDetailValues} from './utils.js';
import superbase from '../config/superbaseClient.js'
//SuperPass#001


const form= document.getElementById('form');
 form.addEventListener('submit',(e)=>{
  
    const details= getDetails();
    const detailValues=getDetailValues()
    console.log(detailValues)

    let issues=issueTracker(details,detailValues)

    if(issues.length>0){
         e.preventDefault()

     }else{

        //submit to db
     }


})






