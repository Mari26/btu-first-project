const Modal = ({header,footer,children}) =>{
    return (
        <div>
<h1>{header}</h1>{children}
<h2>{footer}</h2>
        </div>
    )
}
export default Modal;