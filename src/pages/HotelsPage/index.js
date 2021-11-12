import React, { useEffect } from 'react'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap'

import Loading from '../../components/Loading'
import PaginatedItems from '../../components/PaginatedItems'
import { useDataContext } from '../../components/hooks/DataProvider'

import SearchForm from './components/SearchForm'
import ProductCardGroup from './components/ProductCardGroup'
import { fetchAllHotels } from './api'
import './styles.scss'

const HotelsPage = () => {
  const {
    loading,
    setLoading,
    hotels,
    setHotels,
    currentItems,
    setCurrentItems,
  } = useDataContext()

  useEffect(() => {
    setLoading(true)
    fetchAllHotels().then((hotels) => {
      setHotels(hotels)
      setLoading(false)
    })
  }, [setHotels, setLoading])

  return (
    <section className='hotels-page'>
      <hr className='mt-0' />
      <Container>
        <Row>
          <Col>
            <Breadcrumb className='hotels-page__breadcrumb'>
              <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
              <Breadcrumb.Item active>More Hotels</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <hr className='mt-0' />
        <Row>
          <Col md={3}>
            <SearchForm />
          </Col>
          {loading ? (
            <Loading />
          ) : (
            <Col md={9}>
              <h3 className='hotels-page__result'>{`共有 ${hotels.length} 筆搜尋結果`}</h3>
              <Row>
                <ProductCardGroup data={currentItems} />
              </Row>
              <Row>
                <Col className='d-flex justify-content-center'>
                  <PaginatedItems
                    itemsPerPage={9}
                    items={hotels}
                    setCurrentItems={setCurrentItems}
                  />
                </Col>
              </Row>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  )
}

export default HotelsPage
