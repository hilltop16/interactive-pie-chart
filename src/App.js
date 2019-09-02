import React, {Component} from 'react';
import './App.css';
import Donut from './components/donutChartComponent';
import FilterForm from './components/filter';

const plotData = {
  shanghai: {
    brand: [{item:'Coca-Cola', count:30},{item:'Pepsi', count:25},{item:'Dr.Pepper',count:5},{item:'Sprite',count:24},{item:'Mountain Dew',count:1},{item:'Fanta',count:15}],
    flavor: [{item:'Traditional', count:30},{item:'Diet', count:8},{item:'Root Beer',count:1},{item:'Ginger Ale',count:3},{item:'Lychee',count:5},{item:'Peach',count:10},{item:'Others',count:43}]
  },
  chicago: {
    brand: [{item:'Coca-Cola', count:40},{item:'Pepsi', count:21},{item:'Dr.Pepper',count:17},{item:'Sprite',count:13},{item:'Mountain Dew',count:9}],
    flavor: [{item:'Traditional', count:30},{item:'Diet', count:29},{item:'Root Beer',count:7},{item:'Ginger Ale',count:13},{item: 'Others', count:18}]
  },
  miami: {
    brand: [{item:'Coca-Cola', count:35},{item:'Pepsi', count:23},{item:'Dr.Pepper',count:19},{item:'Sprite',count:11},{item:'Mountain Dew',count:9}],
    flavor: [{item:'Traditional', count:30},{item:'Diet', count:33},{item:'Root Beer',count:11},{item:'Ginger Ale',count:11}]
  },
  memphis: {
    brand: [{item:'Coca-Cola', count:40},{item:'Pepsi', count:21},{item:'Dr.Pepper',count:17},{item:'Sprite',count:13},{item:'Mountain Dew',count:9}],
    flavor: [{item:'Traditional', count:45},{item:'Diet', count:33},{item:'Root Beer',count:11},{item:'Ginger Ale',count:11}]
  },
  paris: {
    brand: [{item:'Coca-Cola', count:20},{item:'Pepsi', count:25},{item:'Dr.Pepper',count:15},{item:'Sprite',count:15},{item:'Mountain Dew',count:9},{item:'Gatorade',count:15},{item:'Others',count:6}],
    flavor: [{item:'Traditional', count:25},{item:'Diet', count:38},{item:'Root Beer',count:11},{item:'Ginger Ale',count:15},{item:'Others',count:10}]
  },
  london: {
    brand: [{item:'Coca-Cola', count:35},{item:'Pepsi', count:19},{item:'Dr.Pepper',count:15},{item:'Sprite',count:18},{item:'Mountain Dew',count:11},{item:'Gatorade',count:5}],
    flavor: [{item:'Traditional', count:40},{item:'Diet', count:36},{item:'Root Beer',count:11},{item:'Ginger Ale',count:12}]
  }
}

const cities = Object.keys(plotData)

class App extends Component {
  constructor(){
    super()
    this.handleGroupFilter = this.handleGroupFilter.bind(this);
    this.handleCityFilter = this.handleCityFilter.bind(this);
    this.state = {
      group: "brand",
      city: "shanghai",
      cities: cities,
      data: plotData.shanghai.brand,
    }
  }

  handleGroupFilter(e) {
    let group = e.target.value
    let city = this.state.city

    this.setState({
      group: group,
      data: plotData[city][group]
    }) 
  }

  handleCityFilter(e) {
    let city = e.target.value
    let group = this.state.group

    this.setState({
      city: city,
      data: plotData[city][group]
    })
  }

  render() {
    return (
      <div className="App">
        <Donut data={this.state.data}/>
        <FilterForm
          onChangeGroup={this.handleGroupFilter}
          onChangeCity={this.handleCityFilter}
          cities={this.state.cities}
        />
      </div>
    );
  }
}


export default App;
