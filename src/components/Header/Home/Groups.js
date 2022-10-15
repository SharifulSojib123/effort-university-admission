import React, { useEffect, useState } from 'react';
import Group from '../../Group/Group';
import bg from '../../../images/bg.jpg';
import './Groups.css';

const Groups = () => {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        fetch('./Home.JSON')
            .then(res => res.json())
            .then(data => setGroups(data))





    }, [])

    const handleAddTocart = group => {
        console.log(group);

    }


    return (
        <div>
            <div className='bg'>
                <img src={bg} alt="" />
            </div>
            <div className='home-container'>

                <div className='group-container'>

                    {
                        groups.map(group => <Group
                            key={group.Id}
                            group={group}
                            handleAddTocart={handleAddTocart}



                        ></Group>)
                    }
                </div>




            </div>
        </div>

    );
};

export default Groups;