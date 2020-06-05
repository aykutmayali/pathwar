import * as React from "react";
import { Card, Table } from "tabler-react";
import PropTypes from "prop-types";

const SeasonsRows = ({ allSeasons }) => {
  return allSeasons.map(season => {
    return (
      <Table.Row key={season.id}>
        <Table.Col colSpan={2}>{season.name}</Table.Col>
        <Table.Col>{season.status}</Table.Col>
        <Table.Col>{season.visibility}</Table.Col>
      </Table.Row>
    );
  });
};

const AllSeasonsList = props => {
  const { seasons } = props;
  return (
    <Card>
      <Card.Header>
        <Card.Title>All Seasons</Card.Title>
      </Card.Header>
      <Table
        cards={true}
        striped={true}
        responsive={true}
        className="table-vcenter"
      >
        <Table.Header>
          <Table.Row>
            <Table.ColHeader colSpan={2}>Name</Table.ColHeader>
            <Table.ColHeader>Status</Table.ColHeader>
            <Table.ColHeader>Visibility</Table.ColHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {seasons && <SeasonsRows allSeasons={seasons} />}
        </Table.Body>
      </Table>
    </Card>
  );
};

AllSeasonsList.propTypes = {
  seasons: PropTypes.array,
};

export default AllSeasonsList;
