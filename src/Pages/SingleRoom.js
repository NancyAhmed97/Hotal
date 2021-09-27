
import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Banner from "../Components/Banner";
import {Link} from "react-router-dom";
import { RoomContext } from "../Contex";
import StyledHero from "../Components/StyledHero";
export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg,
    };
  }
  static contextType = RoomContext;
  render() {
    const getRoom = this.context.getRoom;
    const room = getRoom(this.state.slug);
    console.log(room);
    if (!room) {
      return (
        <div className="error">
          <h3> no room could be found</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    console.log(room.images);
    const [mainImg,...defaultImg]=room.images
    console.log(room);
    return (
    <>
       <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${room.name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
        <div className="single-room-images">
             {defaultImg.map((item, index) => (
              <img key={index} src={item} alt={room.name} />
            ))}

        </div>
        <div className="single-room-info">
        <artical className="desc">
        <h3>
        Details
        </h3>
        <p>{room.description}</p>
        </artical>
        <artical className="desc">
        <h3>
       info
        </h3>
        <h6>Price:${room.price}</h6>
        <h6>Size:{room.size}SQFT</h6>
        <h6>Max capacity:{room.capacity}People</h6>
        <h6>{room.pets?"Pets allowed":"No pets allowed "}</h6>
        </artical>
        </div>
        </section>
        <section className="room-extras">
<h6>Extras</h6>
<ul className="extras">
{room.extras.map((item,index)=>{
return <li key={index}>- {item}</li>
})}
</ul>
        </section>
        </>
    );
  }
}
