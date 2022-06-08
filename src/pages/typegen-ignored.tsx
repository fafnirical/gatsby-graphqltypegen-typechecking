import { graphql, PageProps } from "gatsby";
import * as React from "react";

const TypegenIgnoredPage = ({
  data,
}: PageProps</* @ts-ignore */
Queries.TypegenIgnoredPageQuery>) => {
  return (
    <main>
      <p>Site title: {data.site?.siteMetadata?.title}</p>
      <hr />
      <p>Query Result:</p>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </main>
  );
};

export default TypegenIgnoredPage;

export const query = graphql`
  query TypegenIgnoredPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
