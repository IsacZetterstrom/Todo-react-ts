import { IUser } from "../interfaces/IUser";
import { User } from "../db/db";

// type PageBannerProps = {
//   user: IUser
// }

function PageBanner(prop): JSX.Element {
  return (
    <header>
      <h2>header bitch</h2>
      <p>Hi there {prop.username} {} What's up???</p>
    </header>
  )
}

export default PageBanner