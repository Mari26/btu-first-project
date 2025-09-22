const ColorButton = ({label, color}) =>{
    return (
    <button style={{
    backgroundColor: color,
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    margin: '5px',
    cursor: 'pointer'}}>
      {label} 
    </button>
    )
}

export default ColorButton ;