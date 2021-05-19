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
  const [data, setData] = useState(undefined);
  const fetchData = async () => {
    const response = await axios.get(
      `https://potter-crawler-api.herokuapp.com/${getRequest}`
    );
    setData(response.data);
  };
  useEffect(() => {
    fetchData();
  }, [data]);

  const test = () => {
    fetchData();
  };
  return (
    <Container style={{ backgroundColor: "white" }}>
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
              action="Get"
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
          <Segment style={{ maxHeight: "340px", overflowY: "scroll" }}>
            <pre style={{ overflowX: "auto" }}>
              {data && JSON.stringify(data, null, 2)}
            </pre>
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default PotterApi;
