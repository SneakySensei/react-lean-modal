import React from 'react';

type Props = {
  headers: React.ReactNode[];
  rows: React.ReactNode[][];
};

function ApiTable({ headers, rows }: Props) {
  return (
    <table className="min-w-[680px] border-collapse border table-auto w-full">
      <thead className="bg-gray-300">
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="border p-1 font-semibold">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, index) => (
              <td key={index} className="border p-1">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ApiTable;
