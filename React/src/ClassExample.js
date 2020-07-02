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

  state = {
    email: "",
    password: "",
    error: "",
    person: {},
  };

  func1 = (event) => {

  };
  func2 = (event) => {

  };
  func3 = (event) => {

  };

  handleEmailChange = (event) => {
    this.func1(event);
    this.func2(event);
    this.func3(event);
    // VALIDATE HERE
    this.setState({ email: event.target.value });
  };
  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = async (event) => {

    // SUBMIT 
  };


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

        <input
              type="email"
              name="email"
              id="inputEmail"
              class="form-control"
              placeholder="Email address"
              required=""
              autofocus=""
              onChange={this.handleEmailChange}
            />
      </div>
    );
  }
}
