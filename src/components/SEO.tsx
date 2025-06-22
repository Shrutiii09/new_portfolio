import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO: React.FC = () => {
  return (
    <Helmet>
      <title>Shruti Agarwal | Full Stack Developer</title>
      <meta name="description" content="Shruti Agarwal - Full Stack Developer with expertise in Python, Django, JavaScript, React and more." />
      <meta name="keywords" content="Shruti Agarwal, Full Stack Developer, Python Developer, Web Developer, Django, JavaScript, Portfolio" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://shrutiagarwal.dev/" />
      <meta property="og:title" content="Shruti Agarwal | Full Stack Developer" />
      <meta property="og:description" content="Full Stack Developer with expertise in Python, Django, JavaScript, React and more." />
      <meta property="og:image" content="/social-preview.jpg" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://shrutiagarwal.dev/" />
      <meta property="twitter:title" content="Shruti Agarwal | Full Stack Developer" />
      <meta property="twitter:description" content="Full Stack Developer with expertise in Python, Django, JavaScript, React and more." />
      <meta property="twitter:image" content="/social-preview.jpg" />
      
      {/* Canonical */}
      <link rel="canonical" href="https://shrutiagarwal.dev/" />
    </Helmet>
  );
};

export default SEO;