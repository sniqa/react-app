import { DownloadIcon, UploadIcon, TrashIcon, PlusIcon } from '@assets/Icons'

const TableToolbar = () => {
  return (
    <div className="h-10 pt-2 pl-4">
      <a className="pr-2 relative font-medium text-indigo-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100">
        <TrashIcon />
      </a>

      <a className="pr-2 relative font-medium text-indigo-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100">
        <DownloadIcon />
      </a>

      <a className="pr-2 relative font-medium text-indigo-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100">
        <UploadIcon />
      </a>

      <a className="pr-2 relative font-medium text-indigo-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100">
        <PlusIcon />
      </a>
    </div>
  )
}

export default TableToolbar
