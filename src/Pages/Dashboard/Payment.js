import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { useQuery } from 'react-query';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const { id } = useParams();
    const url = `https://murmuring-atoll-76800.herokuapp.com/booking/${id}`;

    const stripePromise = loadStripe('pk_test_51L4Sl2CNw5cxh59KWkrBlOQYX5SXoBSu6faDJk6uAFspTY1q3YLCFwthImhVGpZ1aamKkhMgGdmZjKBqQKsKRC7k00mdUbTGDx');

    const { data: order, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div  className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div  className="card-body">
                    <p className="text-success font-bold">Hello, {order.displayname}</p>
                    <h2  className="card-title">Please Pay for {order.service}</h2>
                    <p>Please pay: ${order.price}</p>
                </div>
            </div>
            <div  className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div  className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;