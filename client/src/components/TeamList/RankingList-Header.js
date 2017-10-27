import React from "react";

const RankingListHeader = props => {

  return (
    <thead>
      <tr>
        <th>POSITION</th>
        <th colSpan={5}>PASSING</th>
        <th colSpan={3}>RUSHING</th>
        <th colSpan={3}>RECEIVING</th>
        <th>TOTAL</th>
      </tr>
      <tr>
        <th>PLAYER</th>
        <th>TEAM</th>
        <th>C/A</th>
        <th>YDS</th>
        <th>TD</th>
        <th>INT</th>
        <th>RUSH</th>
        <th>YDS</th>
        <th>TD</th>
        <th>REC</th>
        <th>YDS</th>
        <th>TD</th>
        <th>PTS</th>
      </tr>
    </thead>
  );
};

export default RankingListHeader;
