import React from 'react'
import PropTypes from 'prop-types'
import { Col } from 'react-bootstrap'
import { format } from 'date-fns'

import ProductCard from '../../../components/ProductCard'
import {
  ellipsisImg,
  ellipsisName,
  ellipsisLocation,
} from '../../../components/utilities'

const ProductCardGroup = ({ data }) => {
  return (
    <>
      {data &&
        data.map((tour, index) => {
          return (
            <Col xs={12} md={4} xxl={4} key={index}>
              <ProductCard
                picture={ellipsisImg(tour.Picture.PictureUrl1)}
                name={ellipsisName(tour.Name)}
                place={ellipsisLocation(tour.Address) || '詳見官網'}
                updateTime={`${format(
                  Date.parse(tour.UpdateTime),
                  'yyyy-MM-dd HH:mm',
                )} Update`}
              />
            </Col>
          )
        })}
    </>
  )
}

ProductCardGroup.propTypes = {
  data: PropTypes.array,
}

export default ProductCardGroup
