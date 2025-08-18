import styles from './Profile.module.css';
function Profile({name, tag, location, avatar, stats}) {
  return (
    <div className={styles.profile}>
        <img src={avatar} alt="User avatar" className={styles.profileImg} />
        <div className={styles.profileInformation}>
            <h1>{name}</h1>
            <h3>{tag}</h3>
            <h3>{location}</h3>       
        </div>
        <ul className={styles.socialList}>
            <li>
                <span className={styles.listName}>Followers</span>
                <span>{stats.followers}</span>
            </li>
            <li>
                <span className={styles.listName}>Views</span>
                <span>{stats.views}</span>
            </li>
            <li>
                <span className={styles.listName}>Likes</span>
                <span>{stats.likes}</span>
            </li>
        </ul>
    </div>
  )
}

export default Profile;