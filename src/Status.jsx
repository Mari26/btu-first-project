const Status = (props)=>{
    return (
        <div style={{color:"red"}}>
{props.online ? "მომხმარებელი ონლაინშია" : "მომხმარებელი ოფლაინშია"}
        </div>
    )
}
export default Status;