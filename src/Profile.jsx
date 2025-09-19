const Profile = ({name,isAdmin})=>{
    return (
<div>
<p>{isAdmin? 'Admin: ' : 'User: ' } <strong>{name}</strong></p>
</div>


    )
}

export default Profile