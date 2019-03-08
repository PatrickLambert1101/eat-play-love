import React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';
import PageContainer from '../components/styles/PageContainer';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Card from '../components/styles/Card';
import CardWrap from '../components/styles/CardWrap';
import AnimateContent from './AnimateContent';
import isEntryExit from './isEntryExit';
var shortid = require('shortid');

class CardWrapper extends React.Component {
  render() {
    return (
      <PageContainer>
        <CardWrap>
          {this.props.data.map(card => (
            <Card textImage key={shortid.generate()}>
              <AnimateContent>
                <div>
                  <TransitionLink
                    {...isEntryExit}
                    to={`/${
                      this.props.baseUrl
                    }/${card.node.frontmatter.title
                      .toLowerCase()
                      .replace(/\s+/g, '-')}`}
                  >
                    <h2>{card.node.frontmatter.title}</h2>
                    <PreviewCompatibleImage
                      scale
                      imageInfo={card.node.frontmatter.image}
                    />
                  </TransitionLink>
                </div>
              </AnimateContent>
            </Card>
          ))}
        </CardWrap>
      </PageContainer>
    );
  }
}

export default CardWrapper;
