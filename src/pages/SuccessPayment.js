import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from '../requestMethod';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../redux/cartSlice';

const Success = (props) => {
  const location = useLocation();
  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  const data = location?.state?.stripeData;
  const cart = location?.state?.products;
  const currentUser = useSelector((state) => state?.userSlice?.currentUser?.user);
  const [orderId, setOrderId] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const redirectToHome = () => {
    dispatch(clearCart());
    navigate('/');
  }

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("order", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        console.log("res.data order in successPage", res.data);
        setOrderId(res.data._id);
      } catch (err) {
        console.log("ERROR While creating order with msg: ", err.msg);
      }
    };
    data && createOrder();
  }, [cart, data, currentUser]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <button onClick={redirectToHome} style={{ padding: 10, marginTop: 20, textDecoration: 'none', color: '#000', border: 'solid 1px #000', cursor: 'pointer' }}>Go to Homepage</button>
    </div>
  );
};

export default Success;
