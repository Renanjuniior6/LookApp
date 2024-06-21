/* eslint-disable prettier/prettier */
import React from 'react';

import { Box, Text, Touchable, Cover, Title, Spacer } from '../../components';
import util from '../../util';
import { colors } from '../../styles/theme.json';

const Category = ({title, description}) => {
  return (
    <Touchable width="100%" height="180px" radius="10px" spacing="10px 0px">
        <Cover width="100%" height="100%" image="https://s3-alpha-sig.figma.com/img/f721/4256/d2f6d807d46baf91f6e6ba8e5a16b1cf?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BUDhHWR-jT-dFwoUBZgB-waUQ2ZGZNb2qYRmuse3e~ltxFb4a7vlE~hs2B~MMBa4jUUEug-fiP0r0rO2bG5Ryiq4hBzdWNlgOVbWd4BBGfTo4dPx9mI2zHZidFjqgdLYDVVfyxxW-c6YIgYu21MMgdJlxrk6FkwWMbT5Bu0EeU8NxZJKKN~QIHnIEoiqxNTxv2K-OjciBDejHjMVxikrUspQMiaO4XOCToR1vID~aW-kFDG6k3wIlMoUl2zI41UHeaR4bQwkxHZ-ScpwOXvXdo-kRO8NrzHMXT4TW1wAdMMjMfFI4nTn8wh-Mny9d9N45n45hwlIjef9ZMzUoAHgtg__">
        <Box width="100%" justify="center" align="center" hasPadding background={util.toAlpha(colors.black, 50)}>
            <Title color="light" bold>{title}</Title>
            <Spacer />
            <Text color="light">{description}</Text>
        </Box>
        </Cover>

    </Touchable>
  );
};

export default Category;

