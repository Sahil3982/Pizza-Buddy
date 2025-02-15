import { useEffect, useState } from "react";

const Dashboard = () => {
  const [dishes, setDishes] = useState([]);
  const [orders, setOrders] = useState([]);
  const [newDish, setNewDish] = useState({ name: "", price: "", size: "", img: "" });

  // Fetch existing dishes and orders
  useEffect(() => {
    fetchDishes();
    fetchOrders();
  }, []);

  const fetchDishes = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/dishes");
      if (!response.ok) throw new Error("Failed to fetch dishes");
      const data = await response.json();
      setDishes(data);
    } catch (error) {
      console.error("Error fetching dishes:", error);
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/orders");
      if (!response.ok) throw new Error("Failed to fetch orders");
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  // Handle adding a new dish
  const addDish = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/addrecipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
          "Pragma": "no-cache",
        },
        cache: "no-store",
        body: JSON.stringify(newDish),
      });
      if (!response.ok) throw new Error("Failed to add dish");
      fetchDishes(); // Refresh dish list
      setNewDish({ name: "", price: "", size: "", img: "" });
    } catch (error) {
      console.error("Error adding dish:", error);
    }
  };
  
  return (
    <div>
      <h1>Admin Dashboard</h1>
      
      {/* Add Dish Form */}
      <form onSubmit={addDish}>
        <input type="text" placeholder="Dish Name" value={newDish.name} onChange={(e) => setNewDish({ ...newDish, name: e.target.value })} required />
        <input type="number" placeholder="Price" value={newDish.price} onChange={(e) => setNewDish({ ...newDish, price: e.target.value })} required />
        <select value={newDish.size} onChange={(e) => setNewDish({ ...newDish, size: e.target.value })} required>
          <option value="">Select Size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <input type="text" placeholder="Image URL" value={newDish.img} onChange={(e) => setNewDish({ ...newDish, img: e.target.value })} required />
        <button type="submit">Add Dish</button>
      </form>

      {/* Display Dishes */}
      <h2>Available Dishes</h2>
      <ul>
        {dishes.length > 0 ? (
          dishes.map((dish) => (
            <li key={dish.id}>
              <img src={dish.img} alt={dish.name} width="50" /> {dish.name} - ${dish.price} ({dish.size})
            </li>
          ))
        ) : (
          <p>No dishes available</p>
        )}
      </ul>

      {/* Order Status */}
      <h2>Order Status</h2>
      <ul>
        {orders.length > 0 ? (
          orders.map((order) => (
            <li key={order.id}>
              Order #{order.id} - {order.status}
            </li>
          ))
        ) : (
          <p>No orders yet</p>
        )}
      </ul>
    </div>
  );
};

export default Dashboard;
