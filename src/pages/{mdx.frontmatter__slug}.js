import React from 'react';
import { graphql } from 'gatsby';
import BookTemplate from '../templates/book-template';
import EpisodeTemplate from '../templates/episode-template';
import Seo from '../components/seo'

const DynamicTemplate = ({ data, children }) => {
  const { frontmatter } = data.mdx;

  if (frontmatter.type === 'book') {
    return  <BookTemplate data={data} children={children} />;
  } else if (frontmatter.type === 'episode') {
    return <EpisodeTemplate data={data} children={children} />;
  } else {
    return null;
  }
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        type
        title
        description
        slug
        iframe
        hero_image {
            childImageSharp {
              gatsbyImageData
            }
        }
      }
    }
  }
`;

export const Head = ({data}) => (
  <Seo 
    title={data.mdx.frontmatter.title}
    description={data.mdx.frontmatter.description}
  />
)

export default DynamicTemplate;