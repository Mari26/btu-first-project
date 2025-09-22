const StatusMessage = ({isOnline}) =>{
    return (
        <p>{isOnline 
        ? '🟢 მომხმარებელი ონლაინშია' 
        : '🔴 მომხმარებელი ოფლაინშია'
      }</p>
    );
}

export default StatusMessage;