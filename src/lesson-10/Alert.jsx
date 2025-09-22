const Alert = ({type,children}) =>{
const icon = type === 'success' ? '✅' : '❌';
    return (<div>
<span>{icon}</span>
      {children}
    </div>)
}
export default Alert;