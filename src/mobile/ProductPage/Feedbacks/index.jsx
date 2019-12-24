import React, { useState } from 'react';
import {} from 'prop-types';

import Icon from 'components/Icon';
import Title from '../Title';
import PhotosPopup from './photosPopup';
import CustomerFeedback from './customerFeedback';

import avatar1 from 'images/avatar1.png';
import avatar2 from 'images/avatar2.png';

import photo from 'images/photo.png';
import {
  Wrapper,
  RatingWrapper,
  Evaluation,
  EvaluationValue,
  EvaluationRating,
  Rating,
  RatingList,
  Row,
  Star,
  Line,
  Percent,
  Photos,
  PhotosTitle,
  PhotosAvatar,
  Gallery,
  GalleryCol,
  GalleryItem,
  FeedbackItem,
  FeedbackItemHeader,
  FeedbackItemImg,
  FeedbackItemName,
  FeedbackItemRating,
  FeedbackItemText,
  FeedbackItemFooter,
  FeedbackItemLikes,
  FeedbackItemComments,
  FeedbackItemSeeMore
} from './styled';

const Feedbacks = ({  }) => {
  const [showCustomerFeedback, setShowCustomerFeedback] = useState(false);
  const [showPhotosPopup, setShowPhotosPopup] = useState(false);

  return <Wrapper>
    <Title
      title="Customer Feedback"
      seeMore="View All"
    />

    <RatingWrapper>
      <Evaluation>
        <EvaluationValue>
          4,7<span>/5</span>
        </EvaluationValue>

        <EvaluationRating>
          <Rating>
            <Icon type="star" svgStyle={{width: 12, height: 12, fill: 4.7 >= 1 ? '#FFC131' : '#ccc'}}/>
            <Icon type="star" svgStyle={{width: 12, height: 12, fill: 4.7 >= 2 ? '#FFC131' : '#ccc'}}/>
            <Icon type="star" svgStyle={{width: 12, height: 12, fill: 4.7 >= 3 ? '#FFC131' : '#ccc'}}/>
            <Icon type="star" svgStyle={{width: 12, height: 12, fill: 4.7 >= 4 ? '#FFC131' : '#ccc'}}/>
            <Icon type="star" svgStyle={{width: 12, height: 12, fill: 4.7 >= 5 ? '#FFC131' : '#ccc'}}/>
          </Rating>

          <span>55 feedbacks</span>
        </EvaluationRating>
      </Evaluation>

      <RatingList>
        <Row>
          <Star>5<Icon type="star" svgStyle={{width: 8, height: 8, fill: '#999'}}/></Star>
          <Line progress={66} background="#208C4E"/>
          <Percent>66%</Percent>
        </Row>

        <Row>
          <Star>4<Icon type="star" svgStyle={{width: 8, height: 8, fill: '#999'}}/></Star>
          <Line progress={35} background="#2ECC71"/>
          <Percent>35%</Percent>
        </Row>

        <Row>
          <Star>3<Icon type="star" svgStyle={{width: 8, height: 8, fill: '#999'}}/></Star>
          <Line progress={20} background="#FFC131"/>
          <Percent>20%</Percent>
        </Row>

        <Row>
          <Star>2<Icon type="star" svgStyle={{width: 8, height: 8, fill: '#999'}}/></Star>
          <Line progress={12} background="#FF7F0B"/>
          <Percent>12%</Percent>
        </Row>

        <Row>
          <Star>1<Icon type="star" svgStyle={{width: 8, height: 8, fill: '#999'}}/></Star>
          <Line progress={5} background="#E4171F"/>
          <Percent>5%</Percent>
        </Row>
      </RatingList>
    </RatingWrapper>

    <Photos>
      <PhotosTitle>
        <span>Photos from Feedback</span>
        <PhotosAvatar image={avatar1}/>
        <PhotosAvatar image={avatar2}/>
        <PhotosAvatar image={avatar2} last more={7}/>
      </PhotosTitle>

      <Gallery>
        <GalleryCol>
          <GalleryItem image={photo} big onClick={() => setShowPhotosPopup(true)}/>
        </GalleryCol>
        <GalleryCol>
          <GalleryItem image={photo} onClick={() => setShowPhotosPopup(true)}/>
          <GalleryItem image={photo} onClick={() => setShowPhotosPopup(true)}/>
          <GalleryItem image={photo} onClick={() => setShowPhotosPopup(true)}/>
          <GalleryItem image={photo} last more={7} onClick={() => setShowPhotosPopup(true)}/>
        </GalleryCol>
      </Gallery>
    </Photos>

    <FeedbackItem>
      <FeedbackItemHeader>
        <FeedbackItemImg src={avatar1}/>
        <FeedbackItemName>
          Hanna Rick
          <span>24 Nov 2019</span>
        </FeedbackItemName>
      </FeedbackItemHeader>
      <FeedbackItemRating>
        <Rating>
          <Icon type="star" svgStyle={{width: 12, height: 12, fill: 4.7 >= 1 ? '#FFC131' : '#ccc'}}/>
          <Icon type="star" svgStyle={{width: 12, height: 12, fill: 4.7 >= 2 ? '#FFC131' : '#ccc'}}/>
          <Icon type="star" svgStyle={{width: 12, height: 12, fill: 4.7 >= 3 ? '#FFC131' : '#ccc'}}/>
          <Icon type="star" svgStyle={{width: 12, height: 12, fill: 4.7 >= 4 ? '#FFC131' : '#ccc'}}/>
          <Icon type="star" svgStyle={{width: 12, height: 12, fill: 4.7 >= 5 ? '#FFC131' : '#ccc'}}/>
        </Rating>
        This is an amazing product!
      </FeedbackItemRating>

      <FeedbackItemText>
        Colors will depend heavily on the setting the character who wears the colores is in. The setting could be as colorful as the 70’s it two. Colors will depend heavily on the setting the character who wears the colores ...
      </FeedbackItemText>

      <Gallery>
        <GalleryCol>
          <GalleryItem image={photo} onClick={() => setShowCustomerFeedback(true)}/>
          <GalleryItem image={photo} onClick={() => setShowCustomerFeedback(true)}/>
        </GalleryCol>
      </Gallery>

      <FeedbackItemFooter>
        <FeedbackItemLikes>
          <Icon type="like"/>
          36
        </FeedbackItemLikes>

        <FeedbackItemComments>
          23 Comments
        </FeedbackItemComments>

        <FeedbackItemSeeMore to="/">See More</FeedbackItemSeeMore>
      </FeedbackItemFooter>

    </FeedbackItem>

    <FeedbackItem>
      <FeedbackItemHeader>
        <FeedbackItemImg src={avatar1}/>
        <FeedbackItemName>
          Hanna Rick
          <span>24 Nov 2019</span>
        </FeedbackItemName>
      </FeedbackItemHeader>
      <FeedbackItemRating>
        <Rating>
          <Icon type="star" svgStyle={{width: 12, height: 12, fill: 4.7 >= 1 ? '#FFC131' : '#ccc'}}/>
          <Icon type="star" svgStyle={{width: 12, height: 12, fill: 4.7 >= 2 ? '#FFC131' : '#ccc'}}/>
          <Icon type="star" svgStyle={{width: 12, height: 12, fill: 4.7 >= 3 ? '#FFC131' : '#ccc'}}/>
          <Icon type="star" svgStyle={{width: 12, height: 12, fill: 4.7 >= 4 ? '#FFC131' : '#ccc'}}/>
          <Icon type="star" svgStyle={{width: 12, height: 12, fill: 4.7 >= 5 ? '#FFC131' : '#ccc'}}/>
        </Rating>
        This is an amazing product!
      </FeedbackItemRating>

      <FeedbackItemText>
        Colors will depend heavily on the setting the character who wears the colores is in. The setting could be as colorful as the 70’s it two. Colors will depend heavily on the setting the character who wears the colores...
      </FeedbackItemText>

      <Gallery>
        <GalleryCol>
          <GalleryItem image={photo} onClick={() => setShowCustomerFeedback(true)}/>
          <GalleryItem image={photo} onClick={() => setShowCustomerFeedback(true)}/>
        </GalleryCol>
      </Gallery>

      <FeedbackItemFooter>
        <FeedbackItemLikes>
          <Icon type="like"/>
          36
        </FeedbackItemLikes>

        <FeedbackItemComments>
          23 Comments
        </FeedbackItemComments>

        <FeedbackItemSeeMore to="/">See More</FeedbackItemSeeMore>
      </FeedbackItemFooter>

    </FeedbackItem>

    <PhotosPopup
      showPhotosPopup={showPhotosPopup}
      setShowPhotosPopup={setShowPhotosPopup}
    />

    <CustomerFeedback
      showCustomerFeedback={showCustomerFeedback}
      setShowCustomerFeedback={setShowCustomerFeedback}
    />
  </Wrapper>
};

Feedbacks.defaultProps = {

};

Feedbacks.propTypes = {

};

export default Feedbacks;