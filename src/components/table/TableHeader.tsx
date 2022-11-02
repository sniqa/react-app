import type { TableHeaderProps } from './types'
import { tableContext } from '@comps/table/TableContainer'
import { useContext, useState } from 'react'
import Dropdown from '@comps/Dropdown'

const TableHeader = () => {
  const { columns, rows } = useContext(tableContext)

  return (
    <thead className="bg-gray-100">
      <tr>
        <th className="sticky inset-y-0 left-0 bg-gray-100 px-4 py-2 text-left">
          <label className="sr-only" htmlFor="SelectAll">
            Select All
          </label>

          <input
            className="h-5 w-5 rounded border-gray-200"
            type="checkbox"
            id="SelectAll"
          />
        </th>
        {columns.map((column, index) => {
          const [open, setOpen] = useState(false)

          return (
            <th
              className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
              key={index}
            >
              <div className="flex items-center gap-2">
                {column.header()}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  onClick={() => setOpen(!open)}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {open && <Dropdown />}
            </th>
          )
        })}
      </tr>
    </thead>
  )
}

export default TableHeader
