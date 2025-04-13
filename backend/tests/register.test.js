import { validateInputs, registerUser } = from '../register/register_functions.js';


describe("Registration Logic",()=>{
    let usersMap;

    beforeEach(()=>{
        usersMap = new Map();
    });

    test("Should return error if the password do not match",()=>{
        const result = validateInputs("Dolph","Bhekiswayo","dolphnoble@gmail.com","password134","password1234","Freelancer");
        expect(result).toBe("Passwords do not match! Please re-check");
    });

    test("Should return error if there is a missing information",()=>{
        const result = validateInputs("Dolph","","dolphnoble@gmail.com","password1234","","Freelancer");
        expect(result).toBe("Ensure you provide all necessary information.");
    });

    test("Should return error if user already exists",()=>{
        usersMap.set("dolphnoble@gmail.com",{firstname:"Dolph",lastname:"Bhekiswayo",password:"password1234",accounttype:"freelancer"})
        const result = registerUser(usersMap,"Dolph","Bhekiswayo","dolphnoble@gmail.com","password1234","password1234","Freelancer");
        expect(result).toBe("User already registered with this email!");
    });

    test("Should succefully register a new user",()=>{
        const result = registerUser(usersMap, "John", "Doe", "john.doe@example.com", "password123", "freelancer");
        expect(result).toBe("User Registered");
        expect(usersMap.size).toBe(1);
        expect(usersMap.get("john.doe@example.com")).toEqual({ firstname: "John", lastname: "Doe", password: "password123", accountType: "freelancer" });

    });

    test("All necessary details  are provided", () => {
        const validationMessage = validateInputs("John", "Doe", "john.doe@example.com", "password123", "password123", "Freelancer");
        expect(validationMessage).toBeNull(); 
    });
});
