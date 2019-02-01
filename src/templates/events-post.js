import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import SingleSideButton from '../components/styles/SingleSideButton';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import ModalButton from '../components/ModalButton';
import Blurb from '../components/styles/Blurb';
import Content, { HTMLContent } from '../components/Content';

export const EventsPostTemplate = ({
  title,
  image,
  content,
  gallery,
  blurb,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;
  console.log(gallery);
  return (
    <div>
      <div className="content">
        <h1>Join us</h1>
        <h2>{title}</h2>
        <h5>
          Hearth &amp; Soul Eco Farm Stanford
          <br /> 5th-8th October
        </h5>
        <PreviewCompatibleImage imageInfo={image} />
        <PageContent content={content} />
        <ModalButton />
        <Blurb>{blurb}</Blurb>

        {gallery.map(single => (
          <PreviewCompatibleImage
            className="insta-image"
            key={single.id}
            imageInfo={single.galleryimage}
          />
        ))}
      </div>
      <SingleSideButton>
        <Link to={'/events'}>
          <h4>Back to events</h4>
        </Link>
      </SingleSideButton>
    </div>
  );
};

EventsPostTemplate.propTypes = {
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.node.isRequired,
  blurb: PropTypes.string
};

const EventsPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <div>
      <EventsPostTemplate
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        blurb={post.frontmatter.blurb}
        gallery={post.frontmatter.gallery}
        contentComponent={HTMLContent}
        content={post.html}
      />
    </div>
  );
};

EventsPost.propTypes = {
  contentComponent: PropTypes.func,
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default EventsPost;

export const pageQuery = graphql`
  query EventsPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 900, maxHeight: 450, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        blurb
        gallery {
          galleryimage {
            id
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 400, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;
