import supabase  from "../config/superbaseClient.js";

function validateInputs(firstname, lastname, email, password, password2, selectedtype) {
    if (!firstname || !lastname || !email || !password || !password2 || !selectedtype) {
        return "Ensure you provide all necessary information.";
    }
    if (password !== password2) {
        return "Passwords do not match! Please re-check";
    }
    if(password.length<6){
        return "Passord is too short make at least it 6 words in length"
    }
    return null; 
}

// change this one to insert user in the database and create user
async function registerUser(firstname, lastname, email, password, selectedtype) {

  

    //creating a new user
    const {data:authData,error: signUpError} = await supabase.auth.signUp({

        email:email,
        password:password,
    });

    if(signUpError){
        console.log("SignUp error", signUpError);
        return;
    }
    console.log("I am about to insert into this table",selectedtype);
    
    const userId = authData?.user?.id;

 
    //insert the details in our table

    if (!userId) {
        console.log("No user ID found after signup.");
        return;
    }

    const response = await supabase
    .from(selectedtype)
    .insert([
        {
            id:userId,
            firstname: firstname,
            lastname: lastname,
        }
    ]);


    if (response.error) {
    console.error("Error inserting data: ", response.error.message); 
    return "Error inserting data: " + response.error.message;
    } else {
    console.log("Details inserted successfully.");
    return "User Registered";
    }

    
    
}

export  { validateInputs, registerUser };