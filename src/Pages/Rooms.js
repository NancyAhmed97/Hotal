import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../Components/Banner'
import Hero from '../Components/Hero'
import SearchRooms from '../Components/SearchRooms'

 const Room = () => {
    return (
        <div>
            <Hero>
                <Banner title="Our Rooms" subtitle="">
                    <Link to="/" className="btn-primary ">Return Home</Link>
                </Banner>
            </Hero>
         <SearchRooms />
        </div>
    )
}
export default Room;