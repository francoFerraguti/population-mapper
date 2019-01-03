import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Background from './Background.js';
import logJSON from './log.json';
import { debug } from 'util';

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
    backgroundColor: "#FF686F",
    fontSize: "24px",
    margin: "8px",
    padding: "24px",
    minWidth: "65px",
    textAlign: "center",
  },
  elite: {
    border: "solid 1px white",
    backgroundColor: "#96FF49",
    fontSize: "24px",
    margin: "8px",
    padding: "24px",
    minWidth: "65px",
    textAlign: "center",
  },
  mutated: {
    fontSize: "12px",
    color: "black",
    fontWeight: "bold",
  },
}

class App extends Component {

  constructor(props) {
    super(props);

    this.renderMap = this.renderMap.bind(this);
    this.renderPopulation = this.renderPopulation.bind(this);

    this.state = logJSON;
  }

  renderPopulation(population) {
    return (
      population.individuals.map((individual, i) => (
        < div key={i} style={(individual.wasElite) ? styles.elite : styles.individual}>
          {individual.fitness.toFixed(2)}
          {individual.wasMutated &&
            <div style={styles.mutated}>M</div>
          }
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
      </div>
    );
  }
}

export default App;
