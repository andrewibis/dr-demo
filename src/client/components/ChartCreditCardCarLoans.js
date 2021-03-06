import React from 'react';
import { translate } from 'react-i18next';
import { Pie } from 'react-chartjs-2';
import 'chart.piecelabel.js';
import { isEmpty } from 'lodash';
import S from 'string';
const CrClChart = ({ t, data }) => {
  const cct = S(t('Credit Cards'))
    .toLowerCase()
    .titleCase();
  const clt = S(t('Car Loans'))
    .toLowerCase()
    .titleCase();
  let { cc, cl } = data;
  if (isEmpty(data)) {
    cc = 0;
    cl = 0;
  }
  const title = `${cct} & ${clt}`;
  return (
    <Pie
      data={{
        datasets: [
          {
            data: [cc, cl],
            backgroundColor: ['#2DA139', '#1D1B1B']
          }
        ],
        labels: [cct, clt]
      }}
      options={{
        maintainAspectRatio: true,
        layout: {
          padding: 0
        },
        legend: {
          display: true
        },
        title: {
          display: true,
          position: 'bottom',
          text: title
        },
        pieceLabel: {
          render: 'value'
        }
      }}
    />
  );
};

export default translate()(CrClChart);
