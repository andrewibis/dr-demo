import React from 'react';

import List from 'nr-react-list';
import ReportListItem from './ReportListItem';

const ReportListView = ({ list }) => {
  return (
    <div className="report-list">
      <List iterator={list} of={ReportListItem} path={'/reports'} />
    </div>
  );
};

export default ReportListView;
