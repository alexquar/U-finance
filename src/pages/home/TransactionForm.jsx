import { useState } from "react"

export default function TransactionForm() {
const [name, setName] = useState('')
const [amount, setAmount] = useState('')
const handleSubmit = (e) => {
    e.preventDefault()

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
                <span>Transaction Amount:</span>
                <input type="text" required onChange={e=> setAmount(e.target.value)} value={amount}/>
            </label>
            <button>Submit</button>
        </form>
      </h3>
    </div>
  )
}
