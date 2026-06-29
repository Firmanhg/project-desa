import React from "react";

export interface Column<T> {
  header: string;
  className?: string;
  render: (item: T, index: number) => React.ReactNode;
}

interface DataTableProps<T> {
  title: string;
  data: T[];
  columns: Column<T>[];

  loading?: boolean;
  emptyMessage?: string;

  addButton?: React.ReactNode;
}

export default function DataTable<T>({
  title,
  data,
  columns,
  loading = false,
  emptyMessage = "Belum ada data.",
  addButton,
}: DataTableProps<T>) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100">

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b">

        <h2 className="text-2xl font-bold text-gray-800">
          {title}
        </h2>

        {addButton}

      </div>

      {/* Table */}
      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-gray-50">

            <tr>

              {columns.map((column, index) => (
                <th
                  key={index}
                  className={`px-5 py-4 text-left text-sm font-semibold text-gray-700 ${column.className ?? ""}`}
                >
                  {column.header}
                </th>
              ))}

            </tr>

          </thead>

          <tbody>

            {loading ? (

              <tr>
                <td
                  colSpan={columns.length}
                  className="py-12 text-center text-gray-500"
                >
                  Memuat data...
                </td>
              </tr>

            ) : data.length === 0 ? (

              <tr>
                <td
                  colSpan={columns.length}
                  className="py-12 text-center text-gray-500"
                >
                  {emptyMessage}
                </td>
              </tr>

            ) : (

              data.map((item, rowIndex) => (

                <tr
                  key={rowIndex}
                  className="border-t hover:bg-gray-50 transition"
                >
                  {columns.map((column, columnIndex) => (
                    <td
                      key={columnIndex}
                      className={`px-5 py-4 align-middle ${column.className ?? ""}`}
                    >
                      {column.render(item, rowIndex)}
                    </td>
                  ))}
                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t text-sm text-gray-500">
        Total Data : <span className="font-semibold">{data.length}</span>
      </div>

    </div>
  );
}