import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Loading from '../../components/Loading'
import ProductCollection from '../../components/ProductCollection'
import HomeCarousel from '../../components/HomeCarousel'
import { useDataContext } from '../../components/hooks/DataProvider'

import {
  fetchHomePageTours,
  fetchHomePageActivities,
  fetchHomePageRestaurants,
  fetchHomePageHotels,
} from './api'

const HomePage = () => {
  const {
    loading,
    setLoading,
    tours,
    setTours,
    activities,
    setActivities,
    restaurants,
    setRestaurants,
    hotels,
    setHotels,
  } = useDataContext()

  useEffect(() => {
    setLoading(true)
    Promise.all([
      fetchHomePageTours(3),
      fetchHomePageActivities(3),
      fetchHomePageRestaurants(3),
      fetchHomePageHotels(3),
    ])
      .then(([tours, activities, restaurants, hotels]) => {
        setTours(tours)
        setActivities(activities)
        setRestaurants(restaurants)
        setHotels(hotels)
        setLoading(false)
      })
      .catch((error) => {
        throw error
      })
  }, [setLoading, setTours, setActivities, setRestaurants, setHotels])

  return (
    <>
      <HomeCarousel />
      <Container>
        <Row>
          <Col md={12}>
            {loading ? (
              <Loading />
            ) : (
              <>
                <ProductCollection
                  title='推薦景點'
                  btnText='看更多景點'
                  data={tours}
                  urlLink='/taiwan-tours'
                />
                <ProductCollection
                  title='最新活動'
                  btnText='看更多活動'
                  data={activities}
                  urlLink='/taiwan-activities'
                />
                <ProductCollection
                  title='就要吃美食'
                  btnText='尋找更多美食'
                  data={restaurants}
                  urlLink='/taiwan-restaurants'
                />
                <ProductCollection
                  title='優質住宿'
                  btnText='尋找更多住宿'
                  data={hotels}
                  urlLink='/taiwan-hotels'
                />
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HomePage
