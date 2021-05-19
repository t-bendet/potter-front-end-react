import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Form,
  Grid,
  Image,
  Button,
  Header,
  Input,
  Segment,
} from "semantic-ui-react";

const PotterApi = () => {
  const [getRequest, setGetRequest] = useState("books");
  const fetchData = async () => {
    const response = await axios.get(
      `https://potter-crawler-api.herokuapp.com/${getRequest}`
    );
    console.log(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const test = () => {
    console.log(getRequest);
  };
  return (
    <Container style={{ backgroundColor: "red" }}>
      <Form onSubmit={() => test()}>
        <Form.Field>
          <label>try it</label>
          <div class="ui labeled input">
            <div class="ui label">
              https://potter-crawler-api.herokuapp.com/
            </div>
            <Input
              type="text"
              placeholder="books"
              action="Search"
              type="text"
              value={getRequest}
              onChange={(e) => setGetRequest(e.target.value)}
            />
          </div>
        </Form.Field>
      </Form>
      <Header as="h3">Result:</Header>
      <Grid>
        <Grid.Column>
          <Segment>
            <pre style={{ overflowX: "auto" }}>Json</pre>
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default PotterApi;
// {JSON.stringify(source, null, 2)}
// {JSON.stringify({ loading, results, value }, null, 2)}
