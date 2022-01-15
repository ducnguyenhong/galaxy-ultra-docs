import clsx from "clsx"

interface ItemProps {
  prop: string
  dataType: string
  description: string
  defaultValue?: string
  required?: boolean
  preWrap?: boolean
}

interface TableDocsProps {
  data: ItemProps[]
}

const TableDocs: React.FC<TableDocsProps> = (props) => {
  const { data } = props

  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-300 dark:border-gray-400">
        <thead>
          <tr className="border-b border-gray-300 bg-gray-200 dark:bg-gray-600 dark:border-gray-400">
            <th className="p-3 border-r border-gray-300 dark:border-gray-400">
              <div className="flex items-center font-semibold dark:text-gray-300">
                Prop
              </div>
            </th>
            <th className="p-3 border-r border-gray-300 dark:border-gray-400">
              <div className="flex items-center font-semibold dark:text-gray-300">
                Datatype
              </div>
            </th>
            <th className="p-3 border-r border-gray-300 dark:border-gray-400">
              <div className="flex items-center font-semibold dark:text-gray-300">
                Default value
              </div>
            </th>
            <th className="p-3 border-r border-gray-300 dark:border-gray-400">
              <div className="flex items-center font-semibold dark:text-gray-300">
                Required
              </div>
            </th>
            <th className="p-3">
              <div className="flex items-center font-semibold dark:text-gray-300">
                Description
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr className={clsx({
                'bg-gray-100 dark:bg-gray-500 dark:text-gray-300': index % 2 !== 0,
                'bg-white dark:bg-gray-400': index % 2 === 0,
              })} key={item.prop}>
                <td className="p-3 border-r border-b border-gray-200 dark:border-gray-300 text-sm font-medium">{item.prop}</td>
                <td className={clsx({
                  'p-3 border-r border-b border-gray-200 dark:border-gray-300 text-sm': true,
                  'whitespace-pre-wrap': !!item.preWrap
                })}>{item.dataType}</td>
                <td className="p-3 border-r border-b border-gray-200 dark:border-gray-300 text-sm">{item.defaultValue}</td>
                <td className="p-3 border-r border-b border-gray-200 dark:border-gray-300 text-sm">{item.required ? 'true' : ''}</td>
                <td className="p-3 text-sm border-b">{item.description}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TableDocs