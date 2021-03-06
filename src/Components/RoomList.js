import React from 'react'
import Room from "./Room"
export default function RoomList({startedRoom}) {
    console.log(startedRoom);
    if(startedRoom.length===0){
        return(
            <div className="empty-search">
<h3>            unfortunately
</h3>
            </div>
        )
    }
    return (
      <section className="roomslist">
      <div className="roomslist-center">
{startedRoom.map((item,index)=>{
    return <Room key={item.id} room={item} />
})}
      </div>
      </section>
    )
}
