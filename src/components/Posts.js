import React from 'react';
import { connect } from "react-redux";
import { getData } from "../js/actions/actions";

export class Posts extends React.Component {
    constructor() {
      super();
    }
    componentDidMount() {
      this.props.getData();
    }
    render() {
      return (
        <ul className="list-group list-group-flush">
          {this.props.articles.map(el => (
            <li className="list-group-item" key={el.id}>
              {el.title}
            </li>
          ))}
        </ul>
      );
    }
  }

function mapStateToProps(state) {
    if(state.remoteArticles){
        return {
            articles: state.remoteArticles.slice(0, 10)
        };
    }
    return {
        articles: []
    };
}

export default connect(
    mapStateToProps,
    { getData }
)(Posts);
