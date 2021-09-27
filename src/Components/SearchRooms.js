
import React from 'react'
import RoomList from "../Components/RoomList"
import RoomFilter from "../Components/RoomFilter"
import {withRoomConsumer} from "../Contex"
import Loading from "./Loading";
function SearchRooms({context}){
       const loading=context.loading
                const startedRoom=context.startedRoom
                const rooms=context.rooms
                    if(loading){
                  return  <Loading />;
                }
                                return(
        <div>
        <RoomFilter rooms={rooms} />

<RoomList startedRoom={startedRoom} />
        </div>
);
}
export default withRoomConsumer(SearchRooms)

