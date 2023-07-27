import { createBrowserRouter } from 'react-router-dom'

import { About } from '@/pages/about'
import { EditPage } from '@/pages/edit'
import { Main } from '@/pages/main'
import { NotFound } from '@/pages/not-found'

import { RoutePaths } from '$/client-shared'

const router = createBrowserRouter([
  {
    path: RoutePaths.MAIN,
    element: <Main />
  },
  {
    path: RoutePaths.EDITOR,
    element: <EditPage />
  },
  {
    path: RoutePaths.ABOUT,
    element: <About />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default router
