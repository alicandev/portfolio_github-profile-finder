import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

const Following = ({ user }) => (
  <ListGroup.Item
    key={user.login}
    action
    className="bg-light text-center"
    style={{ border: '2px solid #343a40', paddingTop: '1.2rem' }}
  >
    <h5 stlye={{ marginTop: '2rem', padding: 0 }}>
      {user.login}
    </h5>
  </ListGroup.Item>
);

Following.propTypes = {
  user: PropTypes.objectOf({
    login: PropTypes.string.isRequired,
  }).isRequired,
};

export default Following;
