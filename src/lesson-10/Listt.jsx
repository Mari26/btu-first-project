const Listt = ({items}) => {
    return (<div style={{"margin-top":"30px"}}>
        <ul>
{items.map((item,index)=>(
    <li key={index}>{item}</li>
))}

        </ul>

    </div>)
}

export default Listt;