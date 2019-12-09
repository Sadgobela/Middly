import userAvatar from './img/userAvatar.png';
import userAvatar2 from './img/userAvatar2.png';
import userAvatar3 from './img/userAvatar3.png';
import postPic from './img/postPic.jpg';
import postPic2 from './img/postPic2.png';
import postPic3 from './img/postPic3.png';

export default {
  notifications: [
    {
      avatar: userAvatar,
      heading: 'Kevin Baltimorian',
      title: 'started following you.',
      info: '3min ',
      type: 'following'
    },
    {
      avatar: userAvatar2,
      heading: 'Nika Pink',
      title: 'following you.',
      info: '2w started ',
      type: 'follow'
    },
    {
      avatar: userAvatar3,
      postPreview: postPic,
      heading: 'Oleg Welton',
      title:
        'Wow! So good suit and tie, I like it very much. Please, give me the contact of the store where you bought it.',
      info: '1d replited to you',
      type: 'replied',
      post: 'your post:'
    },
    {
      avatar: userAvatar3,
      postPreview: postPic2,
      heading: 'Oleg Welton',
      title:
        'Wow! So good suit and tie, I like it very much. Please, give me the contact of the store where you bought it.',
      info: '1d replited to you',
      type: 'replied',
      post: 'post:'
    },
    {
      avatar: userAvatar2,
      postPreview: postPic3,
      heading: 'Jorge Webb',
      title: 'Oh, Hi)))Could you give me one?',
      info: '2d mentioned you:',
      type: 'replied'
    }
  ],
  message: [
    {
      avatar: userAvatar,
      heading: 'Jorge Webb',
      title: 'So cute. I agree with you. If you agree! Another message',
      date: 'Today, 10:30 pm ',
      counter: '1',
      status: true,
      notRead: 3
    },
    {
      avatar: userAvatar,
      heading: 'Jorge Webb',
      title: 'So cute. I agree with you. If you agree! Another message ',
      date: 'Today, 10:30 pm ',
      counter: '1',
      status: false,
      notRead: 1
    },
    {
      avatar: userAvatar,
      heading: 'Jorge Webb',
      title: 'So cute. I agree with you. If you agree! Another message',
      date: 'Today, 10:30 pm ',
      counter: '1',
      status: true,
      notRead: 3
    },
    {
      avatar: userAvatar,
      heading: 'Jorge Webb',
      title: 'So cute. I agree with you. If you agree! Another message',
      date: 'Today, 10:30 pm ',
      counter: '1',
      status: false,
      notRead: 3
    },
    {
      avatar: userAvatar,
      heading: 'Jorge Webb',
      title: 'So cute. I agree with you. If you agree! Another message',
      date: 'Today, 10:30 pm ',
      counter: '1',
      status: true,
      notRead: 0
    },
    {
      avatar: userAvatar,
      heading: 'Jorge Webb',
      title: 'So cute. I agree with you. If you agree! Another message',
      date: 'Today, 10:30 pm ',
      counter: '1',
      status: false,
      notRead: 0
    }
  ],
  cart: {
    currency: '$',
    list: [
      {
        pic: postPic,
        name: 'Winter coat',
        price: 132
      },
      {
        pic: postPic,
        name: 'Sneakers MIU MIU',
        price: 292
      }
    ]
  }
};
