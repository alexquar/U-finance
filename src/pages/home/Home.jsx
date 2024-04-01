import styles from './Home.module.css'
import TransactionForm from './TransactionForm'
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.context}>
        Transaction List
      </div>
      <div className={styles.sidebar}>
        <h3>Add a Transaction:</h3>
        <TransactionForm />
      </div>
    </div>
  )
}
