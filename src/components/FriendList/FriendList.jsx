import FriendsListItem from "./FriendsListItem"
import styles from './Friend.module.css';
function FriendList({friends}) {
  return (
    <ul className={styles.friendList}>
        {friends.map(friend => (
            <FriendsListItem
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
            />
        ))}
    </ul>
  )
}

export default FriendList
