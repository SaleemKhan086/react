import React, { Component } from "react";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Footer from "./FooterComponent";
import Menu from "./MenuComponent";
import Dishdetail from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
import { Switch, Route, Redirect } from "react-router-dom";

const HomePage = () => {
  return <Home />;
};
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }
  selectDish = (dishId) => {
    this.setState({
      selectedDish: this.state.dishes.filter(function (dish) {
        return dish.id === dishId;
      })[0],
    });
  };
  render() {
    return (
      <div>
        <Header />
        <div>{this.getdish}</div>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => (
              <Menu dishes={this.state.dishes} onDishSelect={this.selectDish} />
            )}
          />
          <Redirect to="/home" />
        </Switch>
        <Dishdetail dish={this.state.selectedDish} />
        <Footer />
      </div>
    );
  }
}

export default Main;
