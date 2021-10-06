import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

interface MyQuery {
  site: {
    siteMetadata: {
      description: string
      title: string
    }
  };
}

const App = () => {
  const data = useStaticQuery<MyQuery>(graphql`
      query MyQuery {
          site(siteMetadata: {}) {
              siteMetadata {
                  description
                  title
              }
          }
      }
  `);
  
  console.log('data: ', data);
  const title = data?.site?.siteMetadata?.title ?? {}
  return (
    <>
      <header>
        <Link to={'/about'}>{title}</Link>
      </header>
      <main>hello world! this is main page</main>
    </>
  );
};

export default App;

