
import { inject } from "@angular/core";
import { SignupService } from "../services/signup.service"

export const canActivate = () =>{
    const _signupService = inject(SignupService);
    
    const userName = localStorage.getItem('userName') as string | null;
    const password = localStorage.getItem('password') as string | null;
    console.log("userName",userName);
    console.log("password",password);
    
    const user = {
      username: userName,
      password: password
    };

    if(_signupService.validateUser(user)){
        console.log("true");
        return true;
    }else{
        console.log("false");
        return false;
    }


}