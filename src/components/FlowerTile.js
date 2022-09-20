
const FlowerTile = (props) => {
    console.log(props)
    const {name, image, price, tags} = props;
    return (
        <div class="container">
            <img class="tile" src={image}/>
            

        </div>
    )
}

export default FlowerTile;