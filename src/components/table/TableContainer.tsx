import TableToolbar from '@comps/table/TableToolbar'
import TableHeader from '@comps/table/TableHeader'
import TableBody from '@comps/table/TableBody'
import type { TableContainerProps, TableColumn } from './types'
import { createContext } from 'react'

export { TableColumn }

export const tableContext = createContext<TableContainerProps>({
  columns: [],
  rows: [],
})

const TableContainer = ({ columns, rows }: TableContainerProps) => {
  return (
    <div className="overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
      <tableContext.Provider value={{ columns, rows }}>
        <TableToolbar />

        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <TableHeader />

          <TableBody />
          {/* columns={columns} rows={rows} */}
        </table>
      </tableContext.Provider>
    </div>
  )
}

export default TableContainer
