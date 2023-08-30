import { IUser } from "../interfaces/IUser";
import Users  from "../db/db";

function PageBanner(): JSX.Element {

  return (
    <header>
      <h2>header bitch</h2>
      
      {
        localStorage.getItem('username') ? 
        (<p>Hi there {localStorage.getItem("username")} {localStorage.getItem('role')} What's up???</p>) 
        : (<p>Not logged in</p>)
      }
      
      
    </header>
  )
}

export default PageBanner