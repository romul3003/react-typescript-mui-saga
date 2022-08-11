import { ListItemButton, ListItemText } from '@mui/material'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterEmployees } from '../../modules/app/actions'
import { selectAppState } from '../../modules/app/selectors'

export default function NavigationItem({ id, jobId, title }) {
  const dispatch = useDispatch()
  const appState = useSelector(selectAppState)

  const action = useCallback(() => {
    dispatch(filterEmployees(jobId))
  }, [dispatch, jobId])

  return (
    <ListItemButton
      onClick={action}
      selected={jobId === appState.selectedJob}
    >
      <ListItemText primary={title} />
    </ListItemButton>
  )
}
