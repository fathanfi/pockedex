import React from 'react';
import PropTypes from 'prop-types';
import {
  Badge,
  ButtonToolbar,
  Panel,
  Image,
  ListGroup
} from 'react-bootstrap';

// App Element
import PockedexDetail from './PockedexDetail';

const PockedexPost = props => {
  return(
    <div id={props.lid}>
      <Panel header={props.name}>
        <Image className="pockedex_picture" src={props.image.replace('http://pokeapi.salestock.net/media/', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/')} />
        <ListGroup>
          <PockedexDetail label="ID" value={props.id.toString()}/>
          <PockedexDetail label="Name" value={props.name}/>
          <PockedexDetail label="Height" value={props.height.toString()}/>
          <PockedexDetail label="Weight" value={props.weight.toString()}/>
          <PockedexDetail label="Base Experience" value={props.base_experience.toString()}/>
        </ListGroup>
        <div>
          <h5>Type</h5>
          <ButtonToolbar>
            {props.types.map((type, index) => {
              return(
                <Badge key={"badge_"+index} className={"badge__type badge__type-"+type.type.name}>{type.type.name}</Badge>
              );
            })}
          </ButtonToolbar>
        </div>
      </Panel>
    </div>
  );
}

PockedexPost.propTypes = {
  base_experience: PropTypes.number,
  height: PropTypes.number,
  id: PropTypes.number,
  is_default: PropTypes.bool,
  image: PropTypes.string,
  lid: PropTypes.string,
  name: PropTypes.string,
  types: PropTypes.array,
  weight: PropTypes.number
};

export default PockedexPost;
