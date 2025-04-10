


 //bcrypt.hash()
 export function getDetails(){
    const details={userType:"",email:"",password:""}

        details.userType= document.getElementById("accountType");
        details.email= document.getElementById("email")
        details.password=  document.getElementById("password");

    return details
}


export function getDetailValues(){
    const details={userType:"",email:"",password:""}

        details.userType= document.getElementById("accountType").value;
        details.email= document.getElementById("email").value;
        details.password= document.getElementById("password").value; 
    return details
}





export function registrationDetailsPresent(details){

        if(Object.values(details).includes('')){
           return false
        }

    return true

}

export function existingEmail(email){

    if(email!=''){
        return true;
        
    }

    return false;

}


export function issueTracker(details,detailValues){
    let issues=[]

    if(!registrationDetailsPresent(detailValues)){
    issues.push("please fill in all the required details")
    }

    return issues


}



