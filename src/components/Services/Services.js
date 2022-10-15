import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import Cart from '../Cart/Cart'
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./Services.JSON')
            .then(res => res.json())
            .then(data => setServices(data))





    }, [])
    const handleAddToCart = service => {
        const newCart = [...cart, service];
        setCart(newCart);
    }

    return (
        <div>
            <h2 className='title'>Services</h2>
            <div className='container'>
                <div className='service-container'>

                    {
                        services.map(service => <Service
                            key={service.Id}
                            service={service}
                            handleAddToCart={handleAddToCart}
                        >
                        </Service>)
                    }
                </div>
                <div className='confirmation-container'>
                    <Cart
                        cart={cart}

                    ></Cart>
                </div>
            </div>

        </div>
    );
};

export default Services;