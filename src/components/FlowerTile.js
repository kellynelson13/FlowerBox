const FlowerTile = (props) => {
  console.log(props);
  const { name, image, price, tags } = props;
  return (
    
      <div class="container">
        <img class="tile" src={image} />
        <div class="info">
          <p>
            {name}
            <span>${price}</span>
          </p>
          <div class="tag-container">
          {tags.map(tag => {
            return <span class="tags">{tag}</span>
          })}
          </div>
        </div>
      </div>
    
  );
};

export default FlowerTile;
