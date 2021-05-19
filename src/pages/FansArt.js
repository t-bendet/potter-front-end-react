import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchAllUserDrawings, fetchAllUserStories } from "../actions";
import HP1 from "../images/HP1.jpg";

class FansArt extends React.Component {
  componentDidMount() {
    this.props.fetchAllUserDrawings();
    this.props.fetchAllUserStories();
    const { drawings, stories } = this.props;
  }

  render() {
    return (
      <div>
        <Card>
          <Image src={HP1} size="small" wrapped />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              22 Friends
            </a>
          </Card.Content>
        </Card>
      </div>
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
