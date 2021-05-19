import React from "react";
import { Card, Icon, Image, Container, Tab } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchAllUserDrawings, fetchAllUserStories } from "../actions";

const panes = [
  { menuItem: "Drawings", render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
  { menuItem: "Stories", render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
];

const TabExampleBasic = () => <Tab panes={panes} />;

class FansArt extends React.Component {
  componentDidMount() {
    this.props.fetchAllUserDrawings();
    this.props.fetchAllUserStories();
    const { drawings, stories } = this.props;
  }

  render() {
    return <Container>{TabExampleBasic()}</Container>;
  }
}

const mapStateToProps = (state) => {
  return {
    drawings: state.fansArt.fansDrawings,
    stories: state.fansArt.fansStories,
  };
};

export default connect(mapStateToProps, {
  fetchAllUserDrawings,
  fetchAllUserStories,
})(FansArt);
