import Greeting from "../Greeting";
const Profile =({isAdmin})=>{

   if (!isAdmin) return <Greeting n="mari"/>
    
    return (
        <div>
<p>admiania</p>
        </div>
    )
}

export default Profile;