import userData from './userData.json'
import friendData from './friendData.json'
import transcationData from './transactionData.json'

import './App.css'
import Profile from './components/Profile/Profile'
import FriendsList from './components/FriendList/FriendList'
import Transcation from './components/TransactionHistory/Transcation'



function App() {

  return (
    <>
    <Profile
      name={userData.name}
      tag={userData.tag}
      location={userData.location}
      avatar={userData.avatar}
      stats={userData.stats}
     />
    <FriendsList
      friends={friendData}
    />
    <Transcation
      items={transcationData}
    />
    </>
  )
}

export default App
