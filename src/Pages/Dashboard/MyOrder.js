import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?email=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data));
        }
    }, [user])

    return (
        <div>
        <h2>My Orders: {orders.length}</h2>
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Book</th>
                        <th>Order</th>
                        <th>Per Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((a, index) =><tr>
                            <th>{index + 1}</th>
                            <td>{a.displayname}</td>
                            <td>{a.service}</td>
                            <td>{a.quantity}</td>
                            <td>{a.price}</td>
                        </tr>)
                    }
                    
                    
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyOrder;