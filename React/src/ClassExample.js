import React from "react";
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';

export default class ClassExample extends React.Component {
  constructor(props) {
    console.log("props:", props);
    super(props);


    this.updatePage = this.updatePage.bind(this);

    this.state = { page: "home" };
  }

  updatePage(p){
    console.log(p);
    this.setState({page: 'about'});
  }

  render() {
    let cars = "";

    for (let index in this.props.data.account.Cars) {
      let make = "" + this.props.data.account.Cars[index].Make;
      let model = "" + this.props.data.account.Cars[index].Model;
      cars += `${make} ${model}    `;
    }

    return (
      <div>
        <h1>Hello Object Oriented World!</h1>
        <p>Your Email: {this.props.data.account.Email}</p>

        {cars}

        <Homepage data={{ page: this.state.page, update: this.updatePage }} />
        <Aboutpage data={{ page: this.state.page, update: this.updatePage }} />
      </div>
    );
  }
}
