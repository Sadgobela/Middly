import React, { useEffect, useState, useRef } from 'react';
import Div100vh from 'react-div-100vh';
import { string, bool, func } from 'prop-types';

import avatar from 'images/avatar.png'

import Icon from 'components/Icon';

import {
  PopupWrapper,
  IconWrapper,
  Header,
  Title,
  AddCommentForm,
  AddCommentAvatar,
  AddCommentField,
  AddCommentSend,
  Reply,
  ReplyIcon,
  Comment,
  CommentAvatar,
  CommentContent,
  CommentName,
  CommentMessage,
  CommentTools,
  CommentLikes,
  CommentReply,
  CommentSubComments
} from './styled';

const Popup = ({ showCommentsPopup, setShowCommentsPopup }) => {
  const [reply, setReply] = useState(null);
  const wrapper = useRef(null);

  useEffect(() => {
    if(showCommentsPopup) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [showCommentsPopup]);

  useEffect(() => {
    if(!(wrapper && wrapper.current && wrapper.current.updateStyle)) return;

    if(reply) {
      wrapper.current.updateStyle('max-height', `calc(100rvh - 70px - 65px - 29px)`);
    } else {
      wrapper.current.updateStyle('max-height', `calc(100rvh - 70px - 65px)`);
    }
  }, [reply]);

  return <PopupWrapper active={showCommentsPopup}>
    <Header>
      <Title>Comments</Title>

      <IconWrapper onClick={() => setShowCommentsPopup(false)}>
        <Icon
          type="arrowBack"
          svgStyle={{ width: 9, height: 9, color: '#1A1A1A' }}
        />
      </IconWrapper>
    </Header>

    <Div100vh
      ref={wrapper}
      style={{
        height: '100vh',
        padding: '0 16px',
        maxHeight: `calc(100rvh - 70px - 65px ${reply ? ' - 29px' : ''})`,
        overflowX: 'hidden',
        overflowY: 'auto',
      }}
    >
      <Comment>
        <CommentAvatar src={avatar}/>
        <CommentContent>
          <CommentName>
            Leonardo Dicaprio
            <span>a month ago</span>
          </CommentName>
          <CommentMessage>Colors will depend heavily on the setting the character who wears the colores is in.</CommentMessage>

          <CommentTools>
            <CommentLikes>
              <Icon
                type="like"
                svgStyle={{ width: 13, height: 13, color: '#666' }}
              />
              <span>16</span>
            </CommentLikes>

            <CommentReply onClick={() => setReply('Leonardo Dicaprio')}>Reply</CommentReply>
          </CommentTools>
        </CommentContent>
      </Comment>

      <Comment>
        <CommentAvatar src={avatar}/>
        <CommentContent>
          <CommentName>
            Gordon Rivera
            <span>a month ago</span>
          </CommentName>
          <CommentMessage>Colors will depend heavily on the setting the character who wears the colores is in.</CommentMessage>

          <CommentTools>
            <CommentLikes>
              <Icon
                type="like"
                svgStyle={{ width: 13, height: 13, color: '#666' }}
              />
              <span>16</span>
            </CommentLikes>

            <CommentReply onClick={() => setReply('Gordon Rivera')}>2 Replies</CommentReply>
          </CommentTools>
        </CommentContent>

        <CommentSubComments>
          <Comment>
            <CommentAvatar src={avatar}/>
            <CommentContent>
              <CommentName>
                Leonardo Dicaprio
                <span>a month ago</span>
              </CommentName>
              <CommentMessage>What do you mean?</CommentMessage>

              <CommentTools>
                <CommentLikes>
                  <Icon
                    type="like"
                    svgStyle={{ width: 13, height: 13, color: '#666' }}
                  />
                  <span>16</span>
                </CommentLikes>

                <CommentReply onClick={() => setReply('Leonardo Dicaprio')}>Reply</CommentReply>
              </CommentTools>
            </CommentContent>
          </Comment>

          <Comment>
            <CommentAvatar src={avatar}/>
            <CommentContent>
              <CommentName>
                Leonardo Dicaprio
                <span>a month ago</span>
              </CommentName>
              <CommentMessage>Very Nice!</CommentMessage>

              <CommentTools>
                <CommentLikes>
                  <Icon
                    type="like"
                    svgStyle={{ width: 13, height: 13, color: '#666' }}
                  />
                  <span>16</span>
                </CommentLikes>

                <CommentReply onClick={() => setReply('Leonardo Dicaprio')}>Reply</CommentReply>
              </CommentTools>
            </CommentContent>
          </Comment>
        </CommentSubComments>
      </Comment>

      <Comment>
        <CommentAvatar src={avatar}/>
        <CommentContent>
          <CommentName>
            Leonardo Dicaprio
            <span>a month ago</span>
          </CommentName>
          <CommentMessage>Colors will depend heavily on the setting the character who wears the colores is in.</CommentMessage>

          <CommentTools>
            <CommentLikes>
              <Icon
                type="like"
                svgStyle={{ width: 13, height: 13, color: '#666' }}
              />
              <span>16</span>
            </CommentLikes>

            <CommentReply onClick={() => setReply('Leonardo Dicaprio')}>Reply</CommentReply>
          </CommentTools>
        </CommentContent>
      </Comment>

      <Comment>
        <CommentAvatar src={avatar}/>
        <CommentContent>
          <CommentName>
            Leonardo Dicaprio
            <span>a month ago</span>
          </CommentName>
          <CommentMessage>Colors will depend heavily on the setting the character who wears the colores is in.</CommentMessage>

          <CommentTools>
            <CommentLikes>
              <Icon
                type="like"
                svgStyle={{ width: 13, height: 13, color: '#666' }}
              />
              <span>16</span>
            </CommentLikes>

            <CommentReply onClick={() => setReply('Leonardo Dicaprio')}>Reply</CommentReply>
          </CommentTools>
        </CommentContent>
      </Comment>

      <Comment>
        <CommentAvatar src={avatar}/>
        <CommentContent>
          <CommentName>
            Leonardo Dicaprio
            <span>a month ago</span>
          </CommentName>
          <CommentMessage>Colors will depend heavily on the setting the character who wears the colores is in.</CommentMessage>

          <CommentTools>
            <CommentLikes>
              <Icon
                type="like"
                svgStyle={{ width: 13, height: 13, color: '#666' }}
              />
              <span>16</span>
            </CommentLikes>

            <CommentReply onClick={() => setReply('Leonardo Dicaprio')}>Reply</CommentReply>
          </CommentTools>
        </CommentContent>
      </Comment>
    </Div100vh>

    <Reply active={reply && reply.length}>
      Reply to&nbsp;<span>{reply}</span>
      <ReplyIcon onClick={() => setReply(null)}>
        <Icon
          type="close"
          svgStyle={{ width: 14, height: 14, color: '#666' }}
        />
      </ReplyIcon>
    </Reply>

    <AddCommentForm>
      <AddCommentAvatar src={avatar}/>
      <AddCommentField placeholder="Add a comment"/>
      <AddCommentSend>
        <Icon type="send"/>
      </AddCommentSend>
    </AddCommentForm>
  </PopupWrapper>
};

Popup.defaultProps = {
  title: 'Returns & Exchanges',
  showCommentsPopup: false,
  setShowCommentsPopup: () => {}
};

Popup.propTypes = {
  title: string,
  showCommentsPopup: bool,
  setShowCommentsPopup: func
};

export default Popup;