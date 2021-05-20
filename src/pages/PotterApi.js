import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Form,
  Grid,
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
    <Container
      style={{ backgroundColor: "white", padding: "3rem", marginTop: "3rem" }}
    >
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
      <Header as="h5">
        Need a hint? try books/1 or potions or characters/harry potter
      </Header>
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
      <Header as="h5">
        Docs:{" "}
        <a
          href="https://documenter.getpostman.com/view/14802064/TzRa7Pyi"
          target="_blank"
          rel="noreferrer"
        >
          For the full documentation
        </a>
      </Header>
    </Container>
  );
};

export default PotterApi;
