import userData from './userData.json'
import friendData from './friendData.json'
import transactionData from './transactionData.json'

import './App.css'
import Profile from './components/Profile/Profile'
import FriendsList from './components/FriendList/FriendList'
import Transaction from './components/TransactionHistory/Transaction'



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
    <Transaction
      items={transactionData}
    />
    </>
  )
}

export default App
