import{ useContext} from 'react'
import UserContext from '../App'


function Hover() {
  const a=useContext(UserContext)
 
  return(
    {a}
  )
}
export default Hover
