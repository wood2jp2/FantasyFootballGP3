import React from "react";

const RankingKListHeader = props => {

  return (
    <thead>
      <tr>
        <th>POSITION</th>
        <th colSpan={4}>KICKING</th>
        <th>TOTAL</th>
      </tr>
      <tr>
        <th>PLAYER</th>
        <th>TEAM</th>
        <th>30-39</th>
        <th>40-49</th>
        <th>50+</th>
        <th>PTS</th>
      </tr>
    </thead>
  );
};

export default RankingKListHeader;
