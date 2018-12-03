import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import { kebabCase } from 'lodash';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const BlogPostSingle = styled.div`
  margin: 10px auto 60px;
  h1 {
    margin-bottom: 0;
  }
  h4 {
    margin-bottom: 0px;
    margin-top: 10px;
  }
  small {
    margin-top: -20px;
    font-size: 10px;
    margin-bottom: 20px;
    display: inline-block;
  }
  ul {
    list-style: none;
    margin-bottom: 0;
    padding: 0;
    text-align: center;
  }
  li {
    display: inline-block;
    padding-left: 3px;
  }
  &__single li,
  a {
    color: ${props => props.theme.goldLight};
  }
`;

export default class PostThumb extends Component {
  render() {
    const { fields, frontmatter, excerpt } = this.props.post;
    return (
      <BlogPostSingle>
        <Link className="has-text-primary" to={fields.slug}>
          <PreviewCompatibleImage imageInfo={frontmatter.image} />
        </Link>
        <ul>
          {frontmatter.tags.map((tag, i) => (
            <li className="tag-link" key={tag + `tag`}>
              <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
              {i < frontmatter.tags.length - 1 &&
              i !== frontmatter.tags.length - 2
                ? ','
                : ' '}
              {i === frontmatter.tags.length - 2 && frontmatter.tags.length > 1
                ? 'and'
                : ' '}
            </li>
          ))}
        </ul>
        <Link className="no-under" to={fields.slug}>
          <h4>{frontmatter.title}</h4>
        </Link>
        <small>{frontmatter.date}</small>
        <p>
          {excerpt}
          <br />
          <br />
          <Link className="button button-primary" to={fields.slug}>
            Read More
          </Link>
        </p>
      </BlogPostSingle>
    );
  }
}
