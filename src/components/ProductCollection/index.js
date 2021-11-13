import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'react-bootstrap';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

import ProductCard from '../ProductCard';
import { ellipsisDescription, ellipsisName, ellipsisImg } from '../utilities';

import './styles.scss';

const ProductCollection = ({ title, btnText, urlLink, data }) => {
  return (
    <section className="product-collection">
      <h2 className="text-center">{title}</h2>
      <Row>
        {data.map((datum, index) => {
          return (
            <Col xs={12} md={4} xxl={4} key={index}>
              <ProductCard
                name={ellipsisName(datum.Name)}
                description={ellipsisDescription(datum.Description)}
                updateTime={`${format(Date.parse(datum.UpdateTime), 'yyyy-MM-dd HH:mm')} Update`}
                picture={ellipsisImg(datum.Picture.PictureUrl1)}
                place={datum.Address || datum.Location}
              />
            </Col>
          );
        })}
      </Row>
      <Row>
        <Col className="d-flex justify-content-center mb-5">
          <Button variant="info" className="product-collection__btn-link">
            <Link to={urlLink}>{btnText}</Link>
          </Button>
        </Col>
      </Row>
    </section>
  );
};

ProductCollection.propTypes = {
  title: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  urlLink: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default ProductCollection;
