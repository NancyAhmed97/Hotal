import React, { Component } from "react";
import items from "./data";
const RoomContext = React.createContext();
class RoomProvider extends Component {
  state = {
    rooms: [],
    startedRoom: [],
    featuresRoom: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };
  componentDidMount() {
    let rooms = this.formateData(items);
    let featuresRoom = rooms.filter((room) => room.feature === true);
    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));
    this.setState({
      rooms,
      featuresRoom,
      startedRoom: rooms,
      loading: false,
      maxPrice,
      maxSize,
    });
  }
  formateData(items) {
    let TemItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((img) => img.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return TemItems;
  }
  getRoom = (slug) => {
    let TemItems = [...this.state.rooms];
    const room = TemItems.find((room) => room.slug === slug);
    return room;
  };
  handleChange = (e) => {
    console.log(e.target);
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(e.target.name);
    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  };
  filterRooms = () => {
    let { rooms, type, capacity, price, minSize, maxSize, pets,breakfast } = this.state;
    let tempRooms = [...rooms];
    // let tempRooms = [rooms];
    // let tempRooms = rooms;
    capacity=parseInt(capacity);
    price=parseInt(price);
    minSize=parseInt(minSize);
    maxSize=parseInt(maxSize);
    console.log(type);
    console.log(tempRooms[0]);
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }
    if(capacity !== 1){
      tempRooms=tempRooms.filter((room=>room.capacity>=capacity))
    }
    if(price !== 0){
      tempRooms=tempRooms.filter((room=>room.price<=price))
    }
    if(minSize !== 0){
      tempRooms=tempRooms.filter((room => room.size >= minSize && room.size <= maxSize))
    }
    if(breakfast){
      tempRooms=tempRooms.filter((room => room.breakfast===true ))
    }
    if(pets){
      tempRooms=tempRooms.filter((room => room.pets===true ))
    }
    this.setState({
      startedRoom:tempRooms
    })
  };
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
          filterRooms: this.filterRooms,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;
export function withRoomConsumer(Component) {
  return function consumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}
export { RoomProvider, RoomConsumer, RoomContext };
