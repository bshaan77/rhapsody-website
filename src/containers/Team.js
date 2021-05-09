import React, { Component } from "react";
import "./Team.css";
import HeroCard from "../components/HeroCard";

// mock content, connect to google sheets api later
// image, name, title, description
import { team } from "../mocks/content";

export default class Team extends Component {

  state = {selected: null};
  handleClick = (id) => this.setState({selected: id});

  render() {
    return (
      <div className="container">
        <h1>2020 - 2021 Team</h1>
        <p>description of this team</p>
        <div className="cards-grid row row-cols-4">
          {team.map((t, i) => (
            <div className="card-container col">
              <HeroCard
                className={i === this.state.selected ? "selected-card" : "card"}
                image={t.image}
                name={t.name}
                title={t.title}
                id={i}
                handleClick={this.handleClick}
              />
            </div>
          ))}
        </div>
        <br/>
        {
            team.filter((_, i) => i === this.state.selected).map(t => (
                <div className='description-block'>
                    {t.description}
                </div>
            ))
        }
      </div>
    );
  }
}
