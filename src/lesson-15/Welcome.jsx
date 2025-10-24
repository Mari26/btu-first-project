import { useAuth } from "../context/AuthContext";


const Welcome = () =>{
    const {user,logout} = useAuth();

    if (!user) {
    return null;
  }

  return (
    <div style={{ padding: '20px', background: '#e6f7ff' }}>
     <h2>მოგესალმებით, {user.name}!</h2>
      <p>თქვენ წარმატებით გაიარეთ ავტორიზაცია.</p>
      <button onClick={logout} style={{ background: 'red', color: 'white' }}>
        სისტემიდან გასვლა (Logout)
      </button>
    </div>
  )
}

export default Welcome;