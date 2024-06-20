/* eslint-disable prettier/prettier */
import React from 'react';

import { Box, Touchable, Cover, Text } from '../index';

import { colors } from '../../styles/theme.json';

const Story = () => {
  return (
    <Touchable
      background="black"
      radius="10px"
      height="190px"
      spacing="0px 5px 0px"
      width="150px"
    >
      <Cover
        width="100%"
        height="100%"
        image="https://s3-alpha-sig.figma.com/img/b146/8b96/546b1d42fe24fe48936f57138d34bc15?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oqB652-~ALVcvB5KzvzbYmUSd4AO0RPWNAKgIf4TTZNxX2vzUWMfCB7yNKXF13l7AS-Ykl0FLfJuX0n0sDVDvgnOWcmI7RPnHc-4utw3NqlH5b7tZFg0vyx4SZC-FDL4XxD7Pq7s1AbdIYimcxrd6Ja4BWcaR-sLvTSrjHh21kZTF9FcNXNMTfjLdLmnR-4ZqRvKvI8v2lXrMtzFXPC7PSD15VgN9NQQFsUfZNthrm2ick4NZ2uH-64T71jomKGPwHdanuCWvJ0dO4lYjYgKbdlv-1SJJDNwbZRdMlYDiXiI-XK~UXNr95tOTV4Wm4-ryWJ3TOY1gj~~bZbIwOzBuw"
      >
        <Box
          fluid
          hasPadding
          background={`${colors.dark}80`}
          justify="space-between"
        >
          <Cover
            circle
            width="40px"
            height="40px"
            border={`1px solid ${colors.light}`}
            image="https://s3-alpha-sig.figma.com/img/b146/8b96/546b1d42fe24fe48936f57138d34bc15?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oqB652-~ALVcvB5KzvzbYmUSd4AO0RPWNAKgIf4TTZNxX2vzUWMfCB7yNKXF13l7AS-Ykl0FLfJuX0n0sDVDvgnOWcmI7RPnHc-4utw3NqlH5b7tZFg0vyx4SZC-FDL4XxD7Pq7s1AbdIYimcxrd6Ja4BWcaR-sLvTSrjHh21kZTF9FcNXNMTfjLdLmnR-4ZqRvKvI8v2lXrMtzFXPC7PSD15VgN9NQQFsUfZNthrm2ick4NZ2uH-64T71jomKGPwHdanuCWvJ0dO4lYjYgKbdlv-1SJJDNwbZRdMlYDiXiI-XK~UXNr95tOTV4Wm4-ryWJ3TOY1gj~~bZbIwOzBuw"
          />
          <Box height="50px" justify="flex-end">
            <Text bold color="light">
              Renan Junior
            </Text>
            <Text variant="small" color="light">
              2 mins ago
            </Text>
          </Box>
        </Box>
      </Cover>
    </Touchable>
  );
};

export default Story;
