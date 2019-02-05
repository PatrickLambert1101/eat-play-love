import React from 'react';
import { Link } from 'gatsby';
import PageContainer from '../components/styles/PageContainer';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Card from '../components/styles/Card';
import CardWrap from '../components/styles/CardWrap';
var shortid = require('shortid');

class CardWrapper extends React.Component {
  render() {
    console.log(
      'TCL: CardWrapper -> render -> this.props.data',
      this.props.data
    );
    return (
      <PageContainer>
        <CardWrap>
          {this.props.data.map(card => (
            <Card textImage key={shortid.generate()}>
              <Link to={`/${card.title.toLowerCase()}`}>
                <h2>{card.title}</h2>
                <PreviewCompatibleImage imageInfo={card.image} />
              </Link>
            </Card>
          ))}
        </CardWrap>
      </PageContainer>
    );
  }
}

export default CardWrapper;
