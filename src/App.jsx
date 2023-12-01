import "./user.css"
import user from "./user.json"
import { UserCard } from "./UserCard"

function App() {
  return (
    <div>
      <UserCard
        name={user.name}
        birthday={user.birthday}
        phoneNumber={user.phoneNumber}
        address={user.address}
      />
    </div>
  )
}

export default App
