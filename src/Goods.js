function Goods(props) {
    return(
        <div>
            <img src={props.image} alt="picture" width="200px" />
            <h3>{props.item}</h3>
            <p>{props.price}</p>
            <p>{props.description}</p>
        </div>
    )
}
export default Goods;