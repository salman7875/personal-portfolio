import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { projects } from '../../data'
import './project.scss'

export default function BasicTable () {
  return (
    <TableContainer className='tableContainer' component={Paper}>
      <Table className='table' sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead className='tableHead'>
          <TableRow className='tableRow'>
            <TableCell className='tableCell'>Year</TableCell>
            <TableCell className='tableCell' align='left'>
              Title
            </TableCell>
            <TableCell className='tableCell' align='left'>
              Tech
            </TableCell>
            <TableCell className='tableCell' align='left'>
              Link
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='tableBody'>
          {projects.map(project => (
            <TableRow
              className='tableRow'
              key={project.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className='tableCell' component='th' scope='row'>
                {project.year}
              </TableCell>
              <TableCell className='tableCell' align='left'>
                {project.title}
              </TableCell>
              <TableCell className='tableCell' align='left'>
                <div className='tech'>
                  {project.tech.map(tech => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </TableCell>
              <TableCell align='left' className='tableCell'>
                <a href={project.link} target='_blank'>
                  {project.link}
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
