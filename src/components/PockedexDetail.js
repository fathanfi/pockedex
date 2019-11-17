import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';

const PockedexDetail = props => {
  return(
    <ListGroupItem className="pockedex-data-list">
      <div className="pockedex-data-list__group">
        <div className="pockedex-data-list__column pockedex-data-list__left">
          {props.label}
        </div>
        <div className="pockedex-data-list__column pockedex-data-list__right">
          {props.value}
        </div>
      </div>
    </ListGroupItem>
  );
}

PockedexDetail.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default PockedexDetail;
