import React from "react";

const TeamListHeader = props => {

  return (
    <thead>
      <tr>
        <th>Player</th>
        <th>Position</th>
        <th>Team</th>
        <th>Season Pts</th>
        <th>Season Projected Pts</th>
        <th>Week Projected Pts</th>
      </tr>
    </thead>
  );
};

export default TeamListHeader;
