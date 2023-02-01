import React from 'react';

import { AboutSVG, MembersSVG, StatisticsSVG, BodyAside, AsideText, AsideBlock } from './styled';

const Sidebar: React.FC = () => {
  return (
    <>
      <BodyAside>
        <AsideBlock>
          <MembersSVG />
          <AsideText>Contacts</AsideText>
        </AsideBlock>
        <AsideBlock>
          <StatisticsSVG />
          <AsideText>Statistics</AsideText>
        </AsideBlock>
        <AsideBlock>
          <AboutSVG />
          <AsideText>About</AsideText>
        </AsideBlock>
      </BodyAside>
    </>
  );
};

export default Sidebar;
