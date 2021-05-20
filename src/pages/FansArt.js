import React from "react";
import { Card, Image, Container, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchAllUserDrawings, fetchAllUserStories } from "../actions";

class FansArt extends React.Component {
  componentDidMount() {
    this.props.fetchAllUserDrawings();
    this.props.fetchAllUserStories();
  }
  renderDrawings() {
    const { drawings } = this.props;
    return drawings.map((drawing) => {
      return (
        <Card fluid color="red">
          <Card.Content>
            <Card.Header>{drawing.title}</Card.Header>
            <Card.Description>{drawing.description}</Card.Description>
          </Card.Content>
          <Image
            src={`https://potter-back-end.herokuapp.com/drawings/${drawing._id}`}
            size="medium"
            ui
          />
        </Card>
      );
    });
  }
  renderStories() {
    const { stories } = this.props;
    return stories.map((story) => {
      return (
        <Card
          fluid
          color="red"
          header={story.title}
          description={story.body}
        ></Card>
      );
    });
  }

  render() {
    const { drawings, stories } = this.props;
    return (
      <Container style={{ marginTop: "3rem" }}>
        <Card.Group>{stories.length && this.renderStories()}</Card.Group>
        <br />
        <Card.Group>{drawings.length && this.renderDrawings()}</Card.Group>
      </Container>
    );
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
<Card.Group>
  <Card fluid color="red" header="Option 1" />
  <Card fluid color="orange" header="Option 2" />
  <Card fluid color="yellow" header="Option 3" />
</Card.Group>;
