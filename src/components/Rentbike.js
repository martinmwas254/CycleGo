import React, { useState } from 'react';

const RentBike = () => {
  const [cartItems, setCartItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemImage, setItemImage] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemContact, setItemContact] = useState('');
  const [itemLikes, setItemLikes] = useState(0);
  const [itemComments, setItemComments] = useState([]);

  const addToCart = () => {
    if (itemName.trim() !== '' && itemImage.trim() !== '') {
      const newItem = {
        name: itemName,
        image: itemImage,
        price: itemPrice,
        contact: itemContact,
        likes: itemLikes,
        comments: itemComments,
      };
      setCartItems((prevItems) => [...prevItems, newItem]);
      setItemName('');
      setItemImage('');
      setItemPrice('');
      setItemContact('');
      setItemLikes(0);
      setItemComments([]);
    }
  };

  const removeFromCart = (index) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  };

  const handleLike = (index) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index].likes += 1;
      return updatedItems;
    });
  };

  const handleComment = (index, comment) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index].comments.push(comment);
      return updatedItems;
    });
  };

  return (
    <div>
      <div className="bike-list">
        <div className="bike">
          <img src="https://images.unsplash.com/photo-1575585269294-7d28dd912db8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vdW50YWluJTIwYmlrZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="Mountain Bike" />
          <h3>Mountain Bike</h3>
          <p>Price: $10 per hour</p>
          <button onClick={() => addToCart('Mountain Bike', 'mountain_bike_image.jpg', '$10', 'contact@example.com')}>Add to Cart</button>
        </div>
        <div className="bike">
          <img src="https://media.istockphoto.com/id/150901347/vector/simplified-mountain-bike-silhouette.jpg?s=612x612&w=0&k=20&c=_mh9tzH-wkeotanj588vlxK-ZkMifys5MHEKvb5uhrk=" alt="Road Bike" />
          <h3>Road Bike</h3>
          <p>Price: $15 per hour</p>
          <button onClick={() => addToCart('Road Bike', 'road_bike_image.jpg', '$15', 'contact@example.com')}>Add to Cart</button>
        </div>
        {/* Add more bike options */}
      </div>
      <div className="cart">
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>Price: {item.price}</p>
                <p>Contact: {item.contact}</p>
                <p>Likes: {item.likes}</p>
                <ul>
                  {item.comments.map((comment, commentIndex) => (
                    <li key={commentIndex}>{comment}</li>
                  ))}
                </ul>
                <button onClick={() => removeFromCart(index)}>Remove</button>
                <button onClick={() => handleLike(index)}>Like</button>
                <input
                  type="text"
                  placeholder="Add a comment"
                  value={itemComments[index]}
                  onChange={(e) => {
                    const comments = [...itemComments];
                    comments[index] = e.target.value;
                    setItemComments(comments);
                  }}
                />
                <button onClick={() => handleComment(index, itemComments[index])}>Add Comment</button>
              </li>
            ))}
          </ul>
        )}
        <form className="cart-form" onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Image URL
            </label>
            <input
              type="text"
              className="form-control"
              id="image"
              value={itemImage}
              onChange={(e) => setItemImage(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="text"
              className="form-control"
              id="price"
              value={itemPrice}
              onChange={(e) => setItemPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contact" className="form-label">
              Contact
            </label>
            <input
              type="text"
              className="form-control"
              id="contact"
              value={itemContact}
              onChange={(e) => setItemContact(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={addToCart}>
            Add to Cart
          </button>
        </form>
      </div>
    </div>
  );
};

export default RentBike;
