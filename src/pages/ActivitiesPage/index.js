import React, { useEffect } from 'react'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap'

import Loading from '../../components/Loading'
import PaginatedItems from '../../components/PaginatedItems'
import { useDataContext } from '../../components/hooks/DataProvider'

import SearchForm from './components/SearchForm'
import ProductCardGroup from './components/ProductCardGroup'
import { fetchAllActivities } from './api'
import './styles.scss'

const ActivitiesPage = () => {
  const {
    loading,
    setLoading,
    activities,
    setActivities,
    currentItems,
    setCurrentItems,
  } = useDataContext()

  useEffect(() => {
    setLoading(true)
    fetchAllActivities().then((activities) => {
      setActivities(activities)
      setLoading(false)
    })
  }, [setActivities, setLoading])

  return (
    <section className='activities-page'>
      <hr className='mt-0' />
      <Container>
        <Row>
          <Col>
            <Breadcrumb className='activities-page__breadcrumb'>
              <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
              <Breadcrumb.Item active>More Activities</Breadcrumb.Item>
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
              <h3 className='activities-page__result'>{`共有 ${activities.length} 筆搜尋結果`}</h3>
              <Row>
                <ProductCardGroup data={currentItems} />
              </Row>
              <Row>
                <Col className='d-flex justify-content-center'>
                  <PaginatedItems
                    itemsPerPage={9}
                    items={activities}
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

export default ActivitiesPage
