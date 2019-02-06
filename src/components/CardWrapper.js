import React from 'react';
import { Link } from 'gatsby';
import PageContainer from '../components/styles/PageContainer';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Card from '../components/styles/Card';
import CardWrap from '../components/styles/CardWrap';
var shortid = require('shortid');

class CardWrapper extends React.Component {
  render() {
    return (
      <PageContainer>
        <CardWrap>
          {this.props.data.map(card => (
            <Card textImage key={shortid.generate()}>
              <Link
                to={`${
                  this.props.baseUrl
                }/${card.node.frontmatter.title
                  .toLowerCase()
                  .replace(/\s+/g, '-')}`}
              >
                <h2>{card.node.frontmatter.title}</h2>
                <PreviewCompatibleImage
                  imageInfo={card.node.frontmatter.image}
                />
              </Link>
            </Card>
          ))}
        </CardWrap>
      </PageContainer>
    );
  }
}

export default CardWrapper;
