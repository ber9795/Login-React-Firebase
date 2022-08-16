
import{useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '../Firebase'
import {useNavigate} from 'react-router-dom'

function Home() {
    const navigate=useNavigate()
    const[user, error]=useAuthState(auth)
    const signOutClick =()=> {
        auth.signOut()
        navigate('/')
    }
  return (
    <>
    <h1>Welcome {user?.email}</h1>
    <button onClick={()=>signOutClick()}>Signout </button>
    </>
  )
}

export default Home