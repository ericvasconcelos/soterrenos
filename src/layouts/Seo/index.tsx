import { Helmet } from 'react-helmet-async';

import { ISEO } from './types';

export const SEO = (props: ISEO) => {
  const { title, description, type, name, canonical, image, schemaMarkup } =
    props;

  console.log(props);

  return (
    <Helmet>
      <title>{title} | Só Terrenos</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph for Facebook, LinkedIn */}
      {type && <meta property="og:type" content={type} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter Card */}
      {name && <meta name="twitter:creator" content={name} />}
      {type && <meta name="twitter:card" content={type} />}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Structured Data (Schema Markup) */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
};
