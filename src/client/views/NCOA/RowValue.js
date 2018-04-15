import React from 'react';
import accounting from 'accounting';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';
import S from 'string';

const RowValue = ({ row, options, t }) => {
  const { style: { rightAlign }, amountFormat, cols, url } = options;
  const desc = t(row.RowDescription.trim());
  const linkDesc = S(desc).replaceAll('/', '||');
  return (
    <tr>
      <td style={{ whiteSpace: 'nowrap' }}>{row.CoaCode}</td>
      <td>{desc}</td>
      {cols.map(col => {
        let link = `${url}/${row.CoaCode}`;
        if (row.Section) {
          link += row.Section ? `/${t(row.Section.trim())}` : '';
          link += ` - ${linkDesc}`;
        } else {
          link += `/${linkDesc}`;
        }
        link += `/${col.replace('Col', '')}`;
        return (
          <td style={rightAlign} className="amount" key={col}>
            {col === 'Total' ? (
              <span>{accounting.formatMoney(row[col], amountFormat)}</span>
            ) : (
              <Link to={`${link}`}>
                {accounting.formatMoney(row[col], amountFormat)}
              </Link>
            )}
          </td>
        );
      })}
    </tr>
  );
};

export default translate()(RowValue);
