import { useState, useEffect } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"
export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const {dispatch} = useAuthContext()
    const [isCancelled, setIsCancelled] = useState('false')

    const login = async (email, password) => {
        setError(null)
        setIsPending(true)
        try {
          const res = await  projectAuth.signInWithEmailAndPassword(email, password)
            if(!res){
                throw new Error('Could not signup')
            }
            dispatch({type: 'LOGIN', payload : res.user})
            if(!isCancelled){
                setIsPending(false)
                setError(null)
                }
        } catch(err) {
            if(!isCancelled){
                console.log(err.message)
                setIsPending(false)
                setError(err.message)
                }
        }
    }

    useEffect(()=>{
        return () => setIsCancelled(true)
    }, [])

    return {login, error, isPending}
}