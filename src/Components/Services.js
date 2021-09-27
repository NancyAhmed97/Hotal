import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icone: <FaCocktail />,
        title: "free cocktails",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
      },
      {
        icone: <FaHiking />,
        title: "Endless Hiking",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
      },
      {
        icone: <FaShuttleVan />,
        title: "Free Shuttle",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
      },
      {
        icone: <FaBeer />,
        title: "Strongest Beer",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item,index) => {
            return <artical key={index} className="service">
                <span>{item.icone}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
            </artical>
          })}
        </div>
      </section>
    );
  }
}
