const SizesString = (props) => {

    const sizesStr =  props.sizesStr.map((item, index)=>{
        return <span key={index}>{item}, </span>
    })

    return (
        <span>{sizesStr}</span>
    )
}

export default SizesString;