import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Background from './Background.js';
import TextFileReader from './TextFileReader.js';
var LogFile = require("./Assets_log.txt");

const styles = {
  population: {
    display: "flex",
    width: "100%",
    height: "200px",
    alignItems: "center", /* Align Items Vertically */
    marginBottom: "16px",
    marginTop: "16px",
  },
  individual: {
    border: "solid 1px white",
    backgroundColor: "#5053A3",
    fontSize: "24px",
    margin: "8px",
    padding: "24px",
    minWidth: "65px",
    textAlign: "center",
  },
  elite: {
    border: "solid 1px white",
    backgroundColor: "green",
    fontSize: "24px",
    margin: "8px",
    padding: "24px",
    minWidth: "65px",
    textAlign: "center",
  }

}

class App extends Component {

  constructor(props) {
    super(props);

    this.readData = this.readData.bind(this);
    this.renderMap = this.renderMap.bind(this);
    this.renderPopulation = this.renderPopulation.bind(this);

    this.state = {
      nIndividualsPerGeneration: 0,
      nElite: 0,
      populations: [],
    };
  }

  readData(data) {
    var lines = data.split('\n');
    var populations = [];
    var nPopulation = -1;

    for (var i = 2; i < lines.length; i++) {
      if ((i - 2) % parseInt(lines[0]) == 0) {
        nPopulation++;
        populations[nPopulation] = { individuals: [], index: nPopulation };
      }

      if (lines[i] == "") {
        continue;
      }

      populations[nPopulation].individuals[i - 2 - lines[0] * nPopulation] = { fitness: lines[i] };
    }

    this.setState({
      nIndividualsPerGeneration: parseInt(lines[0]),
      nElite: parseInt(lines[1]),
      populations: populations,
    })
  }

  renderPopulation(population) {
    return (
      population.individuals.map((individual, i) => (
        < div key={i} style={(i < this.state.nElite) ? styles.elite : styles.individual}>
          {individual.fitness}
        </div >
      ))
    )
  }

  renderMap() {
    return (
      this.state.populations.map((population, i) => (
        <div key={i} style={styles.population}>
          {this.renderPopulation(population)}
        </div>
      ))
    )
  }

  render() {

    console.log(this.state);

    return (
      <div className="App">
        <Background
          color={"#7053A3"}
        />

        {this.renderMap()}

        <TextFileReader
          txt={LogFile}
          readData={this.readData}
        />
      </div>
    );
  }
}

export default App;
