import React from 'react';
import { translate } from 'react-i18next';
import { Doughnut } from 'react-chartjs-2';
import 'chart.piecelabel.js';
import { isEmpty } from 'lodash';

const ChartMatchUnMatch = ({ t, data }) => {
  let { match, unmatched } = data;
  if (isEmpty(data)) {
    match = 0;
    unmatched = 0;
  }
  const title = `${t('Rows loaded from source(s)')}: ${match + unmatched} `;
  return (
    <Doughnut
      data={{
        datasets: [
          {
            data: [match, unmatched],
            backgroundColor: ['#2DA139', '#1D1B1B']
          }
        ],
        labels: [t('Matched'), t('Unmatched')]
      }}
      options={{
        maintainAspectRatio: true,
        layout: {
          padding: 0
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

export default translate()(ChartMatchUnMatch);
