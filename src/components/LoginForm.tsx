import { FormEvent, useState } from "react";
import {ILogin} from '../interfaces/ILogin'
import Users from "../db/db";

function LoginForm() {
    
    const [formName, SetformName] = useState<string>("")
    const [formPass, SetformPass] = useState<string>("")

    const checkUser = (event:Event) => {
        event.preventDefault();

        Users.forEach(user => {
            if (formName === user.username && formPass === user.password){
                localStorage.setItem('username', user.username)
                localStorage.setItem('role', user.role)
                console.log(user.todos);
                
                console.log(user);
            }
        });
        
    }

  return (
    <>    
    <h2>Login</h2>
    <form>
        <input type="text" placeholder='username' value={formName} onChange={(e) => SetformName(e.target.value)} />
        <input type="text" placeholder='password' value={formPass} onChange={(e) => SetformPass(e.target.value)}/>
        <button type='submit' onClick={checkUser}>Login</button>
    </form>
    </>

  )
}

export default LoginForm