import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import AltCard from '../components/styles/AltCard';
import AltCardWrap from '../components/styles/AltCardWrap';
import Button from '../components/Button';
import PageContainer from '../components/styles/PageContainer';
import ReadMore from '../components/styles/ReadMore';

export default class RetreatsPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: retreats } = data.retreats;

    return (
      <div>
        <PageContainer>
          <h1>Retreats</h1>
          {retreats.map(({ node: retreat }) => (
            <AltCardWrap key={retreat.id}>
              <Link to={retreat.fields.slug}>
                <PreviewCompatibleImage
                  key={retreat.frontmatter.image.id}
                  imageInfo={retreat.frontmatter.image}
                />
              </Link>
              <AltCard>
                <Link to={retreat.fields.slug}>
                  <h2>{retreat.frontmatter.title}</h2>
                </Link>
                <h4>{retreat.frontmatter.excerpt}</h4>
                <Link to={retreat.fields.slug}>
                  <ReadMore>Read more</ReadMore>
                </Link>
              </AltCard>
            </AltCardWrap>
          ))}
        </PageContainer>
        <Button
          to={'/contact'}
          text={'Contact us for more info'}
          align={'flex-end'}
        />
      </div>
    );
  }
}

RetreatsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query RetreatsQuery {
    retreats: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "retreats-post" } } }
    ) {
      edges {
        node {
          html
          fields {
            slug
          }
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 410, maxHeight: 410, quality: 80) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            excerpt
          }
        }
      }
    }
  }
`;
