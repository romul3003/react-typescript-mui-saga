/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC } from 'react'
import {
  Stack, Pagination, Box, TablePagination,
} from '@mui/material'

const LIMIT_FIVE = 5
const LIMIT_DEFAULT = 10

type ICharactersTablePagination = {
  page: number,
  total: number,
  onChange: (newPage: number) => void
}

const paginationItemsStyles = {
  cursor: 'pointer',
}

const CharactersTablePagination:FC<ICharactersTablePagination> = ({
  page,
  total = 0,
  onChange,
}) => {
  const totalPages = Math.ceil(total / LIMIT_DEFAULT)

  return (
    <Stack spacing={2}>
      {/* custom pagination */}
      <Box>
        {Array
          .from(
            { length: totalPages },
            (_, index) => index + 1,
          ).map((pageIndex) => {
            const isActive = pageIndex === page

            const action = () => {
              if (pageIndex !== page) {
                onChange(pageIndex)
              }
            }

            return isActive ? (
              <b
                key={pageIndex}
                onClick={action}
                style={!isActive ? paginationItemsStyles : {}}
              >
              &nbsp;
                {pageIndex}
              &nbsp;
              </b>
            ) : (
              <span
                key={pageIndex}
                onClick={action}
                style={paginationItemsStyles}
              >
              &nbsp;
                {pageIndex}
              &nbsp;
              </span>
            )
          })}
      </Box>

      <Pagination
        count={totalPages}
        page={page}
        onChange={(_, newPage:number) => onChange(newPage)}
        showFirstButton
        showLastButton
        shape="rounded"
        color="primary"
      />

      <TablePagination
        component="div"
        count={total}
        page={page - 1}
        onPageChange={(_, newPage:number) => onChange(newPage + 1)}
        rowsPerPage={LIMIT_DEFAULT}
        rowsPerPageOptions={[LIMIT_FIVE, LIMIT_DEFAULT]}
      />
    </Stack>
  )
}

export default CharactersTablePagination
