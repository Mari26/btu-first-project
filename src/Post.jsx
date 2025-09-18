const Post = ({userId,id,title,body,onClick})=>{

    return (
<div>
<p>{userId}</p>
<p>{id}</p>
<p>{title}</p>
<p>{body}</p>


<button onClick={onClick}>damaklike</button>

</div>
    )
}

export default Post