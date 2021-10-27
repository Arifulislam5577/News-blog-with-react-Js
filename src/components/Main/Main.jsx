import React, { Component } from "react";
import PreviousBtn from "../PreviousBtn/PreviousBtn";
import Spinner from "../Spinner";
import Blog from "./Blog/Blog";
import Hero from "./Hero/Hero";
import PropTypes from "prop-types";

class Main extends Component {
  static defaultProps = {
    page: 1,
    pageSize: 8,
    country: "in",
    category: "general",
  };
  static propTypes = {
    page: PropTypes.number,
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  };

  UpperCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      newsList: [],
      page: 1,
      pageSize: 8,
      country: "in",
      loading: false,
      category: props.category,
    };
    document.title = `${this.UpperCase(this.props.category)} - News 360`;
  }

  async updateNews() {
    let URL = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.category}&apiKey=39d57880364c4d20941e01d719ced28b&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    this.setState({ loading: true });
    let fetchData = await fetch(URL);
    let parseData = await fetchData.json();

    this.setState({
      loading: false,
      newsList: parseData.articles,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  //Handle Next Page

  handleNext = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  //Handle Previous Page

  handlePrev = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  render() {
    return (
      <>
        <Hero></Hero>
        <div className="container my-5">
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {this.state.loading && <Spinner />}

            {!this.state.loading &&
              this.state.newsList.map((news, idx) => (
                <Blog key={idx} news={news} />
              ))}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div
              className="btn-group w-sm-100 m-auto w-25 d-flex justify-content-center"
              role="group"
              aria-label="Basic example"
            >
              <PreviousBtn
                handlePrev={this.handlePrev}
                page={this.state.page}
              />

              <button
                disabled={
                  this.state.page >=
                  Math.ceil(this.state.totalArticels / this.state.pageSize)
                }
                type="button"
                className="btn btn-warning  header-btn"
                onClick={this.handleNext}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Main;
