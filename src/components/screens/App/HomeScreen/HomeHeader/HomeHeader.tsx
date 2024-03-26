import {Box, Icon, SRTBoxProps} from '@components';
import {useAppSafeArea} from '@hooks';
import React from 'react';
import {SimpleLogo} from '@brand';

export function HomeHeader() {
  const {top} = useAppSafeArea();

  return (
    <Box mb="s24" {...$wrapper} style={{paddingTop: top}}>
      {/* <Box bg="carrotSecondary" width={70} height={16} />
       */}
      <SimpleLogo width={70} />
      <Box flexDirection="row" gap="s24">
        <Box>
          <Icon name="search" />
        </Box>
        <Box>
          <Icon name="bell" />
        </Box>
        <Box>
          <Icon name="comment" />
        </Box>
      </Box>
    </Box>
  );
}

const $wrapper: SRTBoxProps = {
  justifyContent: 'space-between',
  paddingHorizontal: 's24',
  flexDirection: 'row',
};
