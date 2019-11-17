import React from 'react';
import Progress from './Progress';

import {
  Panel,
  ListGroup,
  } from 'react-bootstrap';

// App Component
import LoadingDetail from './LoadingDetail';

const Loading = () => {
  return(
    <div>
      <Panel header={"Loading Data ..."}>
        <div className="timeline-wrapper background-white">
          <div className="timeline-item">
            <div className="animated-background">
              <div className="background-masker header-top"></div>
              <div className="background-masker header-left"></div>
              <div className="background-masker header-right"></div>
              <div className="background-masker header-bottom"></div>
              <div className="background-masker subheader-left"></div>
              <div className="background-masker subheader-right"></div>
              <div className="background-masker subheader-bottom"></div>
            </div>
          </div>
        </div>
        <ListGroup>
          <LoadingDetail label="ID" value="..."/>
          <LoadingDetail label="Name" value="..."/>
          <LoadingDetail label="Height" value="..."/>
          <LoadingDetail label="Weight" value="..."/>
          <LoadingDetail label="Base Experience" value="..."/>
        </ListGroup>
        <Progress/>
      </Panel>
    </div>
  );
};

export default Loading;
