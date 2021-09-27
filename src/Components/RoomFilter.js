import React from "react";
import { useContext } from "react";
import { RoomContext } from "../Contex";
import Title from "../Components/Title";

const getUnique = (items, value) => {
  console.log(items);
  return [...new Set(items.rooms.map((item) => item[value]))];
};
export default function RoomFilter(rooms) {
  const context = useContext(RoomContext);
  const handleChange = context.handleChange;
  const Type = context.Type;
  const capacity = context.capacity;
  const price = context.price;
  const minPrice = context.minPrice;
  const maxPrice = context.maxPrice;
  const minSize = context.minSize;
  const maxSize = context.maxSize;
  const breakfast = context.breakfast;
  const pets = context.pets;
  // let types=getUnique(rooms,'type')
  // types=["all",...types]
  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  let peaple = getUnique(rooms, "capacity");
  peaple = peaple.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <>
      <section className="filter-container">
        <Title title="Search Rooms" />
        <form className="filter-form">
          <div className="form-group ">
            <label htmlFor="type">room Type</label>
            <select
              name="type"
              id="type"
              value={Type}
              className="form-control"
              onChange={handleChange}
            >
              {types}
            </select>
          </div>
          <div className="form-group ">
            <label htmlFor="capacity">Guests Type</label>
            <select
              name="capacity"
              id="capacity"
              value={capacity}
              className="form-control"
              onChange={handleChange}
            >
              {peaple}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="price">room price ${price}</label>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              id="price"
              value={price}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">room size </label>
            <div className="size-inputs">
              <input
                type="number"
                name="minSize"
                value={minSize}
                onChange={handleChange}
                className="size-input"
              />
              <input
                type="number"
                name="maxSize"
                value={maxSize}
                onChange={handleChange}
                className="size-input"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="single-extra">
              <input
                type="checkbox"
                name="breakfast"
                id="breakfast"
                checked={breakfast}
                onChange={handleChange}
              />
              <label htmlFor="breakfast">breakfast</label>
            </div>
            <div className="single-extra">
              <input
                type="checkbox"
                name="pets"
                checked={pets}
                onChange={handleChange}
              />
              <label htmlFor="breakfast">pets</label>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
