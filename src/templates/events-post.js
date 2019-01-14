import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import ModalButton from '../components/ModalButton';
import Content, { HTMLContent } from '../components/Content';
import styled from 'styled-components';

const GalleryImages = styled.div`
  display: flex;
  margin-top: 40px;
  flex-wrap: wrap;
  justify-content: space-between;
  & > div {
    flex: 1 0 30%;
    margin: 10px;
    height: 300px;
  }
`;
const SideButton = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  a {
    background-color: #f9decf;
    padding: 15px 17px;
    font-size: 1.3em;
    h4 {
      color: #824706;
      margin: 0;
    }
  }
`;

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
        <PageContent className="left-content" content={content} />
        <ModalButton />
        <p className="blurb">{blurb}</p>
        <GalleryImages>
          {gallery.map(single => (
            <PreviewCompatibleImage
              className="insta-image"
              key={single.id}
              imageInfo={single.galleryimage}
            />
          ))}
          {gallery.map(single => (
            <PreviewCompatibleImage
              className="insta-image"
              key={single.id}
              imageInfo={single.galleryimage}
            />
          ))}
        </GalleryImages>
      </div>
      <SideButton>
        <Link to={'/events'}>
          <h4>Back to events</h4>
        </Link>
      </SideButton>
    </div>
  );
};

const PostContent = Content;

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
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 200, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        blurb
        gallery {
          galleryimage {
            id
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 400, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
