import styles from './Friend.module.css';

function FriendsListItem({avatar, name, isOnline }) {
  return (
    <div className={styles.friendListItem}> 
        <img src={avatar} alt="Avatar" width="48" />
        <p className={styles.name}>{name}</p>
        <p className={`${styles.status} ${isOnline ? styles.online : styles.offline }`}>
            {isOnline ? 'Online' : 'Offline'}
        </p>
    </div>
  )
}

export default FriendsListItem
