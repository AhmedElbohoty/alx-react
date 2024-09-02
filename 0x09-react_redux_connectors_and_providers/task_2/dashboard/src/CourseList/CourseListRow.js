import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

// Inline styles
const rowStyle = {
  backgroundColor: '#f5f5f5ab',
};

const headerStyle = {
  backgroundColor: '#deb5b545',
};

function CourseListRow({
  isHeader = false,
  textFirstCell,
  textSecondCell = null,
}) {
  const [checked, setChecked] = useState(false);

  function handleChecked() {
    setChecked(!checked);
  }

  if (isHeader) {
    return (
      <tr className={css(styles.tr)} style={headerStyle}>
        <th
          className={css(styles.th)}
          colSpan={textSecondCell === null ? 2 : 1}
        >
          {textFirstCell}
        </th>
        {textSecondCell !== null && (
          <th className={css(styles.th)}>{textSecondCell}</th>
        )}
      </tr>
    );
  }

  return (
    <tr
      className={`${css(styles.tr)} ${checked && css(styles.rowChecked)}`}
      style={rowStyle}
      onClick={handleChecked}
    >
      <td className={css(styles.td)}>
        <input
          className={css(styles.checkbox)}
          type="checkbox"
          onChange={handleChecked}
          checked={checked}
        />
        {textFirstCell}
      </td>
      {textSecondCell !== null && (
        <td className={css(styles.td)}>{textSecondCell}</td>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

// styles
const styles = StyleSheet.create({
  tr: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '64px',
  },
  th: {
    textAlign: 'center',
    borderBottom: '1px solid #ddd',
    lineHeight: '64px',
    ':only-child': { gridColumn: '1 / -1' },
    ':nth-child(2)': { borderLeft: '1px solid #ddd' },
  },
  td: {
    textAlign: 'center',
    borderBottom: '1px solid #ddd',
    lineHeight: '64px',
    ':only-child': { gridColumn: '1 / -1' },
    ':nth-child(2)': { borderLeft: '1px solid #ddd' },
  },
  rowChecked: { backgroundColor: '#e6e4e4' },
  checkbox: { marginRight: '8px' },
});

export default CourseListRow;
