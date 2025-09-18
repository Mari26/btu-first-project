const List = (item)=>{
    return (
        <div>
<ul>
    {item.items.map((ite)=>(
        <li>{ite}</li>
    ))}
</ul>

        </div>
    )
}

export default List;