import styles from './Home.module.css'
import TransactionForm from './TransactionForm'
import { useAuthContext } from '../../hooks/useAuthContext'
export default function Home() {
  const {user} = useAuthContext()
  return (
    <div className={styles.container}>
      <div className={styles.context}>
        Transaction List
      </div>
      <div className={styles.sidebar}>
        <h3>Add a Transaction:</h3>
        <TransactionForm uid={user.uid}/>
      </div>
    </div>
  )
}
