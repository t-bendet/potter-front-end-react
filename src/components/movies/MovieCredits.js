import React from "react";
import { Header, Table, List } from "semantic-ui-react";

//TODO fix map

const MovieCredits = ({ data }) => {
  const renderDataList = (attribute, last) => {
    return data[attribute].map((item, i) => {
      return <List.Item key={item.name}>{item.name}</List.Item>;
    });
  };
  const renderDataList2 = (attribute, attribute2, last) => {
    return data[attribute][attribute2].map((item, i) => {
      if (i > 9) {
        return null;
      }
      return <List.Item key={item.name}>{item.name}</List.Item>;
    });
  };

  return (
    <Table basic="very" size="small" celled collapsing>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Film information</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Header>
              <Header.Content>Director</Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            {data.credits.crew.find((e) => e.job === "Director").name}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header>
              <Header.Content>Original writer</Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            {data.credits.crew.find((e) => e.job === "Novel").name}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header>
              <Header.Content>Screenplay writer</Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            {data.credits.crew.find((e) => e.job === "Screenplay").name}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header>
              <Header.Content>Original Music Composer</Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            {
              data.credits.crew.find((e) => e.job === "Original Music Composer")
                .name
            }
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header>
              <Header.Content>stars</Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            <List>{renderDataList2("credits", "cast")}</List>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>
            <Header>
              <Header.Content>production_countries</Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            <List>{renderDataList("production_countries")}</List>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>
            <Header>
              <Header.Content>production_companies</Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            <List>{renderDataList("production_companies")}</List>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header>
              <Header.Content>budget</Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>{data.budget} $</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header>
              <Header.Content>release_date</Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>{data.release_date}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header>
              <Header.Content>revenue</Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>{data.revenue} $</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header>
              <Header.Content>runtime</Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>{data.runtime} min</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header>
              <Header.Content>vote_average</Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>{data.vote_average}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};
export default MovieCredits;
