import React from "react";
import ExpandContent from "../components/ExpandContent";
import "./Programs.css";

// mock content, connect to google sheets api later
import {programs} from '../mocks/content';

const API_KEY = process.env.REACT_APP_GOOGLE_DEV_KEY;
const PROGRAMS_ID = process.env.REACT_APP_PROGRAMS_SHEETS_ID;

// gapi.client.sheets.spreadsheets.values.get({
//   spreadsheetId: spreadsheetId,
//   range: range
// }).then((response) => {
//   var result = response.result;
//   var numRows = result.values ? result.values.length : 0;
//   console.log(`${numRows} rows retrieved.`);
// });


class Programs extends React.Component {
  state = { select: "type" };

  handleChange = (event) => {
    this.setState({ select: event });
  };

  render() {
    return (
      <div className="container">
        <TypeSelection
          handleChange={this.handleChange}
          select={this.state.select}
        />
        <ContentContainer 
          select={this.state.select}
        />
      </div>
    );
  }
}

const TypeSelection = (props) => {
  const onChange = (e) => {
    props.handleChange(e.target.value);
  };
  return (
    <div className="type-selection-container">
      <div className="type-toggle-wrapper">
        <h1>Programs</h1>
        <select
          name="type"
          value={props.select || "type"}
          onChange={onChange}
        >
          <option value="s&d">Speech & Debate</option>
          <option value="leadership">Leadership</option>
          <option value="writing">Writing</option>
          <option value="other">Other</option>
        </select>
      </div>
      <p className="programs-description">
        descriptiondescriptiondescriptiondescription
      </p>
    </div>
  );
};

/**
* Array 'programs': {
*  type: s&d, writing, leadership, other
*  year: 2019, 2020, 2021
*  status: completed, registration open, in-progress, TBD
*  content: {title, description, image}
* }
*/ 
const ContentContainer = (props) => {
    return (
        programs.filter(p => p.type === props.select)
        .map(p => (
            <ExpandContent 
                image={p.content.image}
                title={p.content.title}
                description={p.status}
                content={p.content.description}
            />
        ))
    );
};

export default Programs;
