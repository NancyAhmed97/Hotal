import React, { Component } from "react";
import { RoomContext } from "../Contex";
import Title from "./Title";
import Loading from "./Loading";
import Room from "./Room";
export default class FreatherRoom extends Component {
  static contextType = RoomContext;
  render() {
    // let { loading, featuresRoom: rooms } = this.context;
let rooms=this.context.rooms
// let featuresRoom=this.context.featuresRoom
let loading=this.context.loading

rooms=rooms.map((room)=>{
return <Room  key={room.id} room={room} />
})
    return (
      <div>
        <section className="featured-rooms">
          <Title title="Featured Room" />
          <div className="featured-rooms-center">
          {loading === true ? <Loading /> : rooms}
          </div>
        </section>
      </div>
    );
  }
}
