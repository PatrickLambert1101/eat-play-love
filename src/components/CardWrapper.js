import React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';
import PageContainer from '../components/styles/PageContainer';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Card from '../components/styles/Card';
import CardWrap from '../components/styles/CardWrap';
import AnimateContent from './AnimateContent';
import isEntryExit from './isEntryExit';
var shortid = require('shortid');

export default function CardWrapper(props) {
  return (
    <PageContainer>
      <CardWrap>
        {props.data.map(card => (
          <Card textImage key={shortid.generate()}>
            <AnimateContent>
              <div>
                <TransitionLink
                  {...isEntryExit}
                  to={`/${
                    props.baseUrl
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
