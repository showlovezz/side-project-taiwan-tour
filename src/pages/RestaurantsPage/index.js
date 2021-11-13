import React, { useEffect } from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';

import Loading from '../../components/Loading';
import PaginatedItems from '../../components/PaginatedItems';
import { useDataContext } from '../../components/hooks/DataProvider';

import SearchForm from './components/SearchForm';
import ProductCardGroup from './components/ProductCardGroup';
import { fetchAllRestaurants } from './api';
import './styles.scss';

const RestaurantsPage = () => {
  const { loading, setLoading, restaurants, setRestaurants, currentItems, setCurrentItems } = useDataContext();

  useEffect(() => {
    setLoading(true);
    fetchAllRestaurants().then(restaurants => {
      setRestaurants(restaurants);
      setLoading(false);
    });
  }, [setRestaurants, setLoading]);

  return (
    <section className="restaurants-page">
      <hr className="mt-0" />
      <Container>
        <Row>
          <Col>
            <Breadcrumb className="restaurants-page__breadcrumb">
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>More Restaurants</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <hr className="mt-0" />
        <Row>
          <Col md={3}>
            <SearchForm />
          </Col>
          {loading ? (
            <Loading />
          ) : (
            <Col md={9}>
              <h3 className="tours-page__result">{`共有 ${restaurants.length} 筆搜尋結果`}</h3>
              <Row>
                <ProductCardGroup data={currentItems} />
              </Row>
              <Row>
                <Col className="d-flex justify-content-center">
                  <PaginatedItems itemsPerPage={9} items={restaurants} setCurrentItems={setCurrentItems} />
                </Col>
              </Row>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default RestaurantsPage;
