import React from 'react'
const checkout = { 
    _id:1234,
    createdAt: new Date(),
    checkoutItems:[
        {
            productId:"1",
            name:"Jacket",
            color:"Black",
            size:"M",
            price:150,
            quantity:1,
            image:"https://picsum.photo/150?random=1"
        },
        {
            productId:"2",
            name:"T-shirt",
            color:"White",
            size:"Xl",
            price:120,
            quantity:2,
            image:"https://picsum.photo/150?random=2"
        },
    ],
shippingAddress:{
address:"123 Fashion Street",
city:"Rawalpindi",
country:"Pakistan"
}
}

const OrderConfirmationPage = () => {
  const  calculatedEstimatedDelivery =(createdAt)=>{
const orderDate = new Date(createdAt);
orderDate.setDate(orderDate.getDate() + 10);
return orderDate.toLocaleDateString();
  }
  return (
    <div className="mx-auto p-6 bg-white max-w-4xl">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
        Thank you for your Order!
      </h1>
      {checkout && (
        <div className="p-6 rounded-lg border">
          <div className="flex justify-between mb-20">
            {/* Order Id and Date */}
            <div className="">
              <h2 className="text-xl font-semibold">
                Order ID: {checkout._id}
              </h2>
              <p className="text-gray-500">
                Order Date: {new Date(checkout.createdAt).toLocaleDateString()}
              </p>
            </div>
            {/* Estimated Delivery */}
            <div className="">
              <p className="text-emerald-700 text-sm">Estimated Delivery:{" "}{calculatedEstimatedDelivery(checkout.createdAt)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderConfirmationPage
