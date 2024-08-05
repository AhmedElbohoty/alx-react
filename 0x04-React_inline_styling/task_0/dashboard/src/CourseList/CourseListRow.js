import React from 'react';
import PropTypes from 'prop-types';

// Inline styles
const rowStyle = {
  backgroundColor: '#f5f5f5ab',
};

const headerStyle = {
  backgroundColor: '#deb5b545',
};

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  if (isHeader) {
    return (
      <tr className="courselist-tr" style={headerStyle}>
        <th className="courselist-th" colSpan={textSecondCell === null ? 2 : 1}>
          {textFirstCell}
        </th>
        {textSecondCell !== null && (
          <th className="courselist-th">{textSecondCell}</th>
        )}
      </tr>
    );
  }

  return (
    <tr className="courselist-tr" style={rowStyle}>
      <td className="courselist-td">{textFirstCell}</td>
      {textSecondCell !== null && (
        <td className="courselist-td">{textSecondCell}</td>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
