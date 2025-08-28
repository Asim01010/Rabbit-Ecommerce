import React, { useEffect, useState } from "react";

const MyOrderPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // simulate fetching order
    setTimeout(() => {
      const mockOrders = [
        {
          _id: "12345",
          createdAt: new Date(),
          shippingAddress: {
            city: "New York",
            country: "USA",
            postalCode: "10001",
            street: "123 Main St",
          },
          orderItems: [
            {
              name: "Product 1",
              Image: "http://picsum.photos/200/300?random=1",
            },
          ],
          price: "$120",
          status: "Shipped",
        },
        {
          _id: "32345",
          createdAt: new Date(),
          shippingAddress: {
            city: "New York",
            country: "USA",
            postalCode: "10001",
            street: "123 Main St",
          },
          orderItems: [
            {
              name: "Product 2",
              Image: "http://picsum.photos/200/300?random=2",
            },
          ],
          price: "$80",
          status: "Processing",
        },
      ];
      setOrders(mockOrders);
    }, 1000);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>
      <div className="relative shadow-md sm:rounded-lg overflow-hidden">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Order Id</th>
              <th className="px-4 py-3">Created</th>
              <th className="px-4 py-3">Shipping Address</th>
              <th className="px-4 py-3">Items</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  className="border-b bg-white hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <td className="py-2 px-2 sm:p-4">
                    <img
                      src={order.orderItems[0].Image}
                      alt={order.orderItems[0].name}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg"
                    />
                  </td>
                  <td className="px-4 py-2">{order._id}</td>
                  <td className="px-4 py-2">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2">
                    {order.shippingAddress.street}, {order.shippingAddress.city}
                    , {order.shippingAddress.country} -{" "}
                    {order.shippingAddress.postalCode}
                  </td>
                  <td className="px-4 py-2">{order.orderItems[0].name}</td>
                  <td className="px-4 py-2">{order.price}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`${
                        order.status === "Shipped"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      } px-2 py-1 rounded-full text-xs font-semibold`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center py-4 px-4 text-gray-500">
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrderPage;
