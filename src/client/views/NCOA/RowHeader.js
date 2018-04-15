import React from 'react';
import { translate } from 'react-i18next';

const RowHeader = ({ row, options, t }) => {
  const { style } = options;
  return (
    <tr className="table-primar">
      <td colSpan="7">
        <p className="text-uppercase">
          {t(row.RowDescription)} ({row.CoaCode})
        </p>
      </td>
    </tr>
  );
};

export default translate()(RowHeader);
