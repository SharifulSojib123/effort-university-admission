import React, { useEffect, useState } from 'react';
import './About.css';
import Me from '../AboutMe/Me';

const About = () => {

    const [us, setUs] = useState([]);

    useEffect(() => {

        fetch('./About.JSON')
            .then(res => res.json())
            .then(data => setUs(data))



    }, [])
    return (
        <div>
            <div className='home-container service'>
                <h5> Location: Road 42,Savar bus stand,Dhaka. <br />
                    <p>Google Map: <br />
                        https://www.google.com/search?q=Savar+google+map&oq=Savar+google+map&aqs=chrome..69i57j69i60l2.7076j0j7&sourceid=chrome&ie=UTF-8;</p>



                </h5> <br
                />

            </div>
            <h2 className='title'>About Our Teacher</h2>
            <div className='us-container'>
                {
                    us.map(me => <Me

                        me={me}

                    ></Me>)
                }
            </div>
        </div>
    );
};

export default About;