/* eslint-disable prettier/prettier */
import React from 'react';
import { Box, Text, Cover, Touchable, Spacer } from '../';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { colors } from '../../styles/theme.json';

const Post = () => {
  return (
    <Box hasPadding fluid>
      <Box row align="center">
        <Cover
          image="https://s3-alpha-sig.figma.com/img/5e7e/2318/405500ad80d0060b8c41edbe07f5f2dd?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P6V9GJlfjNqJn64Cq0Ivr0hZUoJRWIBPMEdqj05kV4AnmBw44qaS95WJcedVtNL3tG8zZ2su6YDoF7j2ZG3JRk8XR87HSyRQHNQC8Dtxz4GGTJ-M9Qkz9RJT~uSatCK0yDDj1LK3nuDCtqvnahrv8uj1P1BpkDHNWJ4K~07Ox3uIMbL6jiZQicefjPoqO9~z7g2-RKv2eY71RWHzjaBUk2ItnxMfsBWYE4pHWoqeBV27hzVDTxeSNKMh9CreK7jlK7vk4vm8DHOd1lnDLUHM5qN-W8sPJ6JpGYQD562ozAC2fqUufVO~b4p3BBvX9ps36BPfchB2si-jB6l~c2osOw"
          width="40px"
          height="40px"
          circle
        />
        <Box spacing="0px 0px 0px 10px">
          <Text bold color="dark">
            Renan Junior
          </Text>
          <Text variant="small">20 mins ago</Text>
        </Box>
        <Touchable height="30x" width="80px" align="flex-end">
          <Icon name="options" size={15} color={colors.muted} />
        </Touchable>
      </Box>
      <Cover
        image="https://s3-alpha-sig.figma.com/img/7b7f/f47e/675fa282d4edf97c1aaca00993d5d41c?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hA5RQkBfyKlfnw-1~ul-Ky2~4unL9xIVZHsFfVJCz~NsiLQlM5SNPBrepHyrm3eaZap9ZGAJhgowFgBpj3sL-BtSv-0H9imUwvzTBQr0aifHYia6Gt3vxux5idXfh-c4PVAqkbtsy3NZoKq9U7Gb2afr4Fw3baaJL5dfYiK6ZHcu6VUxdwP3BDd3RioRxkL1on2d2U65HDdYIHPJIWNV2Mrxe-xmIj9QyM6BNv~Bnk8gYv3mu-SnRMG03rg0Q6LkI7z7LZn~fuf7aTMc2UZV42esEM88lkQoQTmxQQgdwrQDhBVXAvEVMgjUdK5mDjU8xcvVd2RukAiO71slSOuohw__"
        width="100%"
        height="190px"
        spacing="10px 0px"
        radius="10px"
      />
      <Box row fluid align="center">
        <Box row fluid align="center">
          {Array.from(Array(3))?.map((item) => (
            <Cover
              circle
              width="30px"
              height="30px"
              spacing="0px -15px 0px 0px"
              border={`1px solid ${colors.light}`}
              image="https://s3-alpha-sig.figma.com/img/b146/8b96/546b1d42fe24fe48936f57138d34bc15?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oqB652-~ALVcvB5KzvzbYmUSd4AO0RPWNAKgIf4TTZNxX2vzUWMfCB7yNKXF13l7AS-Ykl0FLfJuX0n0sDVDvgnOWcmI7RPnHc-4utw3NqlH5b7tZFg0vyx4SZC-FDL4XxD7Pq7s1AbdIYimcxrd6Ja4BWcaR-sLvTSrjHh21kZTF9FcNXNMTfjLdLmnR-4ZqRvKvI8v2lXrMtzFXPC7PSD15VgN9NQQFsUfZNthrm2ick4NZ2uH-64T71jomKGPwHdanuCWvJ0dO4lYjYgKbdlv-1SJJDNwbZRdMlYDiXiI-XK~UXNr95tOTV4Wm4-ryWJ3TOY1gj~~bZbIwOzBuw"
            />
          ))}
          <Text variant="small" spacing="0px 20px">
            Liked by 10,098
          </Text>
        </Box>
        <Box row justify="flex-end">
          <Touchable width="24px" spacing="0px 15px 0px 0px">
            <Icon name="heart" size={24} color={colors.danger} />
          </Touchable>
          <Touchable width="24px" spacing="0px 15px 0px 0px">
            <Icon name="bubble" size={24} color={colors.muted} />
          </Touchable>
          <Touchable width="24px">
            <Icon name="share" size={24} color={colors.muted} />
          </Touchable>
        </Box>
      </Box>
      <Spacer />
      <Text color="dark" small>
        Interview: Shoe Designer John Fluevog On New Book, Spirituality And
        ‘Slow Fashion’
      </Text>
    </Box>
  );
};

export default Post;
