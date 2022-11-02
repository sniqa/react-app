import Table, { TableColumn } from '@comps/table/TableContainer'

const colunms: TableColumn[] = [
  {
    header: () => (
      <div className="" onClick={() => alert('hello')}>
        hello
      </div>
    ),
    field: '',
  },
  {
    header: () => <div className="">hello</div>,
    field: '',
  },
  {
    header: () => <div className="">hello</div>,
    field: '',
  },
  {
    header: () => <div className="">hello</div>,
    field: '',
  },
  {
    header: () => <div className="">hello</div>,
    field: '',
  },
]

const Computer = () => {
  return <Table columns={colunms} rows={[]}></Table>
}

export default Computer
