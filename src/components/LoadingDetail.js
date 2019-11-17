import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';

const LoadingDetail = props => {
  return(
    <ListGroupItem className="pockedex-data-list">
      <div className="pockedex-data-list__group">
        <div className="pockedex-data-list__column pockedex-data-list__left">
          {props.label}
        </div>
        <div className="pockedex-data-list__column pockedex-data-list__right">
          <div className="timeline-item-line">
              <div className="animated-background-line">
              </div>
          </div>
        </div>
      </div>
    </ListGroupItem>
  );
}

LoadingDetail.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default LoadingDetail;
