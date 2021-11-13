import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';

const ProductCard = ({ picture, name, place, updateTime }) => {
  return (
    <Card className="mb-3 card-item">
      <Card.Img variant="top" src={picture} className="card-item__img " />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="card-item__text">
          <span className="card-item__marker">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </span>
          <span className="card-item__address">{place}</span>
        </Card.Text>
        <Card.Link href="#" className="card-item__link">
          了解更多
        </Card.Link>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{updateTime}</small>
      </Card.Footer>
    </Card>
  );
};

ProductCard.propTypes = {
  picture: PropTypes.string,
  name: PropTypes.string.isRequired,
  place: PropTypes.string,
  updateTime: PropTypes.string.isRequired,
};

export default ProductCard;
