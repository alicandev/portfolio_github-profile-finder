import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Form,
  InputGroup,
} from 'react-bootstrap';

const AppHead = () => {
  const [searchParam, setSearchParam] = useState('4c3x5u');

  return (
    <Row className="Header">
      <Col xs={8}>
        <h2 className="Title text-dark">GitHub Profile Finder</h2>
      </Col>
      <Col xs={4}>
        <Form className="Controls mb-3" onSubmit={(e) => e.preventDefault()}>
          <Row noGutters>
            <Col xs={9}>
              <InputGroup style={{ border: '2px solid #343a40', borderRadius: '4px' }}>
                <InputGroup.Prepend>
                  <InputGroup.Text className="bg-dark text-light">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="4c3x5u"
                  onChange={(e) => setSearchParam(e.target.value || '4c3x5u')}
                />
              </InputGroup>
            </Col>
            <Col className="pl-2" size={3}>
              <Link
                to={`/${searchParam}`}
                className="btn btn-dark sm"
                style={{ height: '100%', width: '100%' }}
              >
                Search
              </Link>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default AppHead;
