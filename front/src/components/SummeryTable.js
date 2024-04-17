import React from 'react';

function SummaryTable({ summary }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Statistic</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of 1s</td>
          <td>{summary.numOnes}</td>
        </tr>
        <tr>
          <td>Number of 0s</td>
          <td>{summary.numZeros}</td>
        </tr>
        <tr>
          <td>Longest Consecutive 1s</td>
          <td>{summary.longestConsecutiveOnes}</td>
        </tr>
        <tr>
          <td>Longest Consecutive 0s</td>
          <td>{summary.longestConsecutiveZeros}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default SummaryTable;
