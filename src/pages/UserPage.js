import React from "react";
import { connect } from "react-redux";
import { deleteUser } from "../actions";
import { removeCookie, getCookie } from "../utils/cookies";
import StoriesList from "../components/StoriesList";
import DrawingsList from "../components/DrawingsList";
import { Container, Icon, Button, Segment } from "semantic-ui-react";

class UserPage extends React.Component {
  onDeleteClick = () => {
    this.props.deleteUser(getCookie("token"));
    removeCookie("token");
  };
  render() {
    return (
      <Container text>
        <br />
        <Segment>
          <StoriesList />
        </Segment>
        <Segment>
          <DrawingsList />
        </Segment>
        <Button
          style={{ marginBottom: "2rem" }}
          onClick={this.onDeleteClick}
          icon
          className="red"
        >
          DELETE USER
          <Icon name="user delete" />
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.authentication.isSignedIn,
    user: state.authentication.user,
  };
};

export default connect(mapStateToProps, { deleteUser })(UserPage);
