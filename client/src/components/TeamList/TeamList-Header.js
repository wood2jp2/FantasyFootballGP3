import React from "react";
import "materialize-css";
import "react-materialize";


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
            <th>Action</th>
          </tr>
        </thead>


  );
};

export default TeamListHeader;
