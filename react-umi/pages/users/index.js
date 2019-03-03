import styles from './index.css'
// import Link from 'umi/link'
import router from 'umi/router'

export default function() {
  const users = [{ id: 'Simon', name: 'Simon' }, { id: 'CoCo', name: 'CoCo' }]

  return (
    <div className={styles.normal}>
      <h1>Page Users List</h1>
      <ul>
        {/* Link 方式跳转 */}
        {/* {users.map(user => (
          // <li key={user.id}>{user.name}</li>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        ))} */}

        {/* onClick 方式跳转 */}
        {users.map(user => (
          <li key={user.id} onClick={() => router.push(`/users/${user.id}`)}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
