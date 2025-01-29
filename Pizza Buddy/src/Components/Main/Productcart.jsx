/* eslint-disable react/prop-types */

const Productcart = (props) => {
    // eslint-disable-next-line react/prop-types
    const {img} = props
    console.log("props.img",img);
    
  return (
    <section className="product-cart">
      <section className="img-section">
        <div className="item-img">
          <img 
            src={props.img} 
            alt={`Image of ${props.name}`} 
            style={{ width: "100%", height: "auto", maxWidth: "200px" }} // Add some styling for images
          />
        </div>
        <div><strong>{props.name}</strong></div>
        <div>{props.size}</div>
        <section className="price-btn">
          <div>{props.rupee}</div>
          <div>
            <button className="order-btn">ADD</button>
          </div>
        </section>
      </section>
    </section>
  );
};


export default Productcart;
