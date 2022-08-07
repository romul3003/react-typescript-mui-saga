import { FC, ReactNode } from 'react'
import { useRoutes } from 'react-router-dom'
import App from '../pages/App'
import Details from '../pages/Details'

export const CHARACTERS_ROUTE = 'MAIN_ROUTE'
export const CHARACTERS_DETAILS_ROUTE = 'PEOPLE_DETAILS_ROUTE'

type RouteConfig = {
    id: string,
    path: string,
    element: ReactNode,
}

export const routesConfig: RouteConfig[] = [
  {
    id: CHARACTERS_ROUTE,
    path: '/',
    element: <App />,
  },
  {
    id: CHARACTERS_DETAILS_ROUTE,
    path: '/characters/:id',
    element: <Details />,
  },
]

// eslint-disable-next-line consistent-return
export const getRouteConfig = (id: string): string | undefined => {
  const route = routesConfig.find((r: RouteConfig) => r.id === id)

  if (route) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { path } = route

    return path
  }
}

const RoutesComponent: FC = () => {
  const routes = useRoutes(routesConfig)

  return routes
}

export default RoutesComponent
