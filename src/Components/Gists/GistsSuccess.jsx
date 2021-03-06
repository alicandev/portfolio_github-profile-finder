import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import GistsSingle from './GistsSingle';

const GistsSuccess = ({ gists }) => (
  <ListGroup className="GistsSuccess">
    {gists.map((gist) => (
      <GistsSingle gist={gist} />
    ))}
  </ListGroup>
);

GistsSuccess.propTypes = ({
  gists: PropTypes.arrayOf(
    PropTypes.objectOf({
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
});

export default GistsSuccess;
