import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import Helpers from 'models/Helpers';
import Notification from 'models/Notification';

export default class NotificationItem extends React.PureComponent {
  static propTypes = {
    type: PropTypes.string.isRequired,
    actor: PropTypes.shape({
      firsname: PropTypes.string,
      lastname: PropTypes.string,
      avatar: PropTypes.string,
    }),
    object: PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
    }),
    timestamp: PropTypes.number,
    user: PropTypes.shape({}).isRequired,
  };

  static defaultProps = {
    actor: {},
    object: {},
    timestamp: Date.now(),
  };

  render() {
    const { type, actor, object, timestamp, user } = this.props;

    const actorFullname = `${actor.firstname} ${actor.lastname}`;
    const notificationMessage = Notification.getNotificationMessage(
      type,
      object,
      actor,
      user
    );

    return (
      <Link href={`/post/${object.id}`}>
        <div className="notifications-dropdown__message">
          <div className="notifications-dropdown__interlocutor-avatar">
            {actor.avatar ? (
              <img src={actor.avatar} alt={actorFullname} />
            ) : (
              Helpers.getInitial(actorFullname)
            )}
          </div>
          <div className="notifications-dropdown__message-text">
            <ReactMarkdown source={notificationMessage} />
            <div className="notifications-dropdown__misc">
              <div className="NotificationItem-images">
                {object.images &&
                  object.images.map((image) => (
                    <img key={image.id} src={image.url} alt="" />
                  ))}
              </div>
              <span className="notifications-dropdown__interlocutor-date date-time">
                {moment(timestamp).format('h:hh a')}
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
