/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView } from '../index';

import Product from '.';

const ProductList = () => {
  return (
    <ScrollView fluid>
      {Array.from(Array(25))?.map((item) => (
        <Product
          cover="https://s3-alpha-sig.figma.com/img/80c4/641b/349ac2aa1a3c8d5e6d528e28935c4589?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UhBybcfOtgyNNarvkTvSVDAVSbh4XEvW1eKeqCjhk9cTO190Hjr6IvvG2mRL2MlqwOtCyNTiMhWJy5~YpK9hKyxn1OWbboulWothaeMdXdKaWbcPIY9IN7RoMV1jAyVubky~-Ls1oAmT4-nDRIeKC5hSR5gHq6LrHaKrg0HoiwBYSlewRz85fU9pfiTGfI1RWmeZkl~yYBr4g~R-6y1ZG5DkHQbVM758--uV4-k6pzH3NZlEPpe-sOgctYn-fZp1CUa30nAYb-gW1Yx7Qv0BD2iih4Py-o~avyFS1Pkmmg~tyeaMRAw7gCip7xsYNK2FBPPz12VCaH~-dRop4aSuhg__"
          brand="Raf Simons"
          title="Large striped cardigan"
          price="R$1080"
        />
      ))}
    </ScrollView>
  );
};

export default ProductList;
