import React, { useEffect } from 'react'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap'

import Loading from '../../components/Loading'
import PaginatedItems from '../../components/PaginatedItems'
import { useDataContext } from '../../components/hooks/DataProvider'

import SearchForm from './components/SearchForm'
import ProductCardGroup from './components/ProductCardGroup'
import { fetchAllTours } from './api'
import './styles.scss'

const ToursPage = () => {
  const {
    loading,
    setLoading,
    tours,
    setTours,
    currentItems,
    setCurrentItems,
  } = useDataContext()

  useEffect(() => {
    setLoading(true)
    fetchAllTours().then((tours) => {
      setTours(tours)
      setLoading(false)
    })
  }, [setTours, setLoading])

  return (
    <section className='tours-page'>
      <hr className='mt-0' />
      <Container>
        <Row>
          <Col>
            <Breadcrumb className='tours-page__breadcrumb'>
              <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
              <Breadcrumb.Item active>More Tours</Breadcrumb.Item>
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
              <h3 className='tours-page__result'>{`共有 ${tours.length} 筆搜尋結果`}</h3>
              <Row>
                <ProductCardGroup data={currentItems} />
              </Row>
              <Row>
                <Col className='d-flex justify-content-center'>
                  <PaginatedItems
                    itemsPerPage={9}
                    items={tours}
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

export default ToursPage
