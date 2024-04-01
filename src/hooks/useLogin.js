import { useState, useEffect } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"
export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const {dispatch} = useAuthContext()
    const [isCancelled, setIsCancelled] = useState('false')

    const signup = async (email, password, displayName) => {
        setError(null)
        setIsPending(true)
        try {
          const res = await  projectAuth.createUserWithEmailAndPassword(email, password)
            if(!res){
                throw new Error('Could not signup')
            }
           await res.user.updateProfile({displayName})
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

    return {signup, error, isPending}
}