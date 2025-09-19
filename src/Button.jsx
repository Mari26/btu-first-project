const Button = ({primary}) =>{
    return (<div>
{primary? <p>"მთავარი ღილაკი"</p>:<p>"მეორადი ღილაკი"</p>}
    </div>)
}

export default Button ;