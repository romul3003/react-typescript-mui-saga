import { FC, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  Paper, TableContainer, Table, Box, TableHead, TableBody, CircularProgress, TextField, Link,
} from '@mui/material'

import { Link as RouterLink } from 'react-router-dom'
import { selectCharacter } from '../../redux/characters/selectors'
import { AppState } from '../../init/rootReducer'
import { CharactersState } from '../../redux/characters/reducer'
import { Character } from '../../redux/characters/types'
import { loadCharacters } from '../../redux/characters/actions'

import { StyledTableRow, StyledTableCell } from './CharactersTable.styles'
import CharactersTablePagination from '../CharactersPagination'

const CharactersTable: FC = () => {
  const characters = useSelector<AppState, CharactersState>(selectCharacter)
  const dispatch = useDispatch()

  const changePage = (newPage: number) => dispatch(loadCharacters(newPage, characters.search))
  const search = (event: ChangeEvent<HTMLInputElement>) => dispatch(loadCharacters(1, event.target.value))

  return (
    <>
      <form>
        <TextField
          value={characters.search}
          onChange={search}
          label="Search characters..."
        />
      </form>
      {characters.loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box my={4}>
          <TableContainer
            sx={{ my: 4 }}
            component={Paper}
          >
            <Table>
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell>Birth Year</StyledTableCell>
                  <StyledTableCell>Eye Color</StyledTableCell>
                  <StyledTableCell>Hair Color</StyledTableCell>
                  <StyledTableCell>Height</StyledTableCell>
                  <StyledTableCell>Mass</StyledTableCell>
                  <StyledTableCell />
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {characters?.data?.results?.map((character: Character) => {
                  const id = character.url.replaceAll(/\D/g, '')

                  return (
                    <StyledTableRow key={character.name}>
                      <StyledTableCell>{character.name}</StyledTableCell>
                      <StyledTableCell>{character.birth_year}</StyledTableCell>
                      <StyledTableCell>{character.eye_color}</StyledTableCell>
                      <StyledTableCell>{character.hair_color}</StyledTableCell>
                      <StyledTableCell>{character.height}</StyledTableCell>
                      <StyledTableCell>{character.mass}</StyledTableCell>
                      <StyledTableCell>
                        <Link
                          component={RouterLink}
                          to={`/characters/${id}`}
                          underline="none"
                        >
                          Details
                        </Link>
                      </StyledTableCell>
                    </StyledTableRow>
                  )
                })}

              </TableBody>
            </Table>
          </TableContainer>
          <CharactersTablePagination
            page={characters.page}
            total={characters.data?.count ?? 0}
            onChange={changePage}
          />
        </Box>
      )}
    </>
  )
}

export default CharactersTable
