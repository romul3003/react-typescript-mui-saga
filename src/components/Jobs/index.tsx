import { FC, useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { JOBS } from '../../modules/api/endpoints'
import Navigation from '../common/Navigation'

const Jobs: FC = () => {
  const { response, performFetch } = useFetch(JOBS)
  const { loading, data } = response

  useEffect(() => {
    performFetch()
  }, [performFetch])

  return (
    <Navigation
      loading={loading}
      services={data}
      title="react + redux + redux-saga + mui app"
    />
  )
}

export default Jobs
