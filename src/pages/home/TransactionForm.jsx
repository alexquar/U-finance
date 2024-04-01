import {useState } from "react"
import { useFirestore } from "../../hooks/useFirestore"
export default function TransactionForm({uid}) {
const [name, setName] = useState('')
const [amount, setAmount] = useState('')
const { addDocument} = useFirestore('transactions')

const handleSubmit = (e) => {
  e.preventDefault()
  addDocument({
    uid, 
    name, 
    amount,
  })
  setName('')
setAmount('')
}


  return (
    <div>
      <h3>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Transaction Name:</span>
                <input type="text" required onChange={e=> setName(e.target.value)} value={name}/>
            </label>
            <label>
                <span> Amount ($):</span>
                <input type="number" required onChange={e=> setAmount(e.target.value)} value={amount}/>
            </label>
            <button>Submit</button>
        </form>
      </h3>
    </div>
  )
}
