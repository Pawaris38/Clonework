// import mutations from './mutations.js'
// import actions from './actions.js'
import getters from './getters.js'
export default {
  namespaced: true,
  state() {
    return {
      spotlight: [
        {
          contentID: '1',
          link: 'https://www.ign.com/',
          thumbnail: 'https://picsum.photos/185/306/?image=1',
          title: 'Call of duty Vangurad multiplayer review multiplayer review',
          isYoutube: false,
          titleBGColor: '#297afb',
        },
        {
          contentID: '2',
          link: 'https://www.ign.com/',
          thumbnail: 'https://picsum.photos/185/306/?image=2',
          title: "The Batman: 'The Bat and the Cat' Trailer Released",
          isYoutube: true,
          titleBGColor: '#B4141A',
        },
        {
          contentID: '3',
          link: 'https://www.ign.com/',
          thumbnail: 'https://picsum.photos/185/306/?image=3',
          title: 'The Best & Worst Reviewed Movies of 2021',
          isYoutube: false,
          titleBGColor: '#233e73',
        },
        {
          contentID: '4',
          link: 'https://www.ign.com/',
          thumbnail: 'https://picsum.photos/185/306/?image=4',
          title: 'Spider-Man Face-Off: The Winner Revealed',
          isYoutube: false,
          titleBGColor: '#63B5E3',
        },
      ],
      newsContents: {
        news: [
          {
            contentID: 1,
            content: `Marvel's Avengers: How Ms. Marvel Is the Game's Unexpected Hero – IGN
          First `,
            userName: 'นายนิว เทพซ่า',
            type: 'PC',
            time: '43 min ago',
            image:
              'https://static-cse.canva.com/blob/140259/ComposeStunningImages7.jpg',
          },
          {
            contentID: 2,
            content: 'The Witcher Season 2: Exclusive Geralt and Ciri Clip',
            userName: 'นายขิง เทพซ่า',
            type: 'Playstation 5',
            time: '20 min ago',
            image: 'https://picsum.photos/185/306/?image=4',
          },
          {
            contentID: 3,
            content: 'The Witcher Season 2: Exclusive Geralt and Ciri Clip',
            userName: 'นายขิง เทพซ่า',
            type: 'Playstation 5',
            time: '20 min ago',
            image:
              'https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
          },
        ],

        articles: [
          {
            contentID: 2,
            content: 'The Witcher Season 2: Exclusive Geralt and Ciri Clip',
            userName: 'นายขิง เทพซ่า',
            type: 'Playstation 5',
            time: '20 min ago',
            image: 'https://picsum.photos/185/306/?image=4',
          },
        ],
        reviews: [
          {
            contentID: 3,
            content: 'The Witcher Season 2: Exclusive Geralt and Ciri Clip',
            userName: 'นายขิง เทพซ่า',
            type: 'Playstation 5',
            time: '20 min ago',
            image:
              'https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
          },
        ],
      },
      story: [
        {
          id: 1,
          thumbnail: 'https://i3.ytimg.com/vi/7vI0DtkWaD0/maxresdefault.jpg',
          youtubeUrl: 'https://www.youtube.com/embed/7vI0DtkWaD0',
          title: 'The Witcher: Blood Origin - Official Teaser Trailer',
          isPlay: true,
        },
        {
          id: 2,
          thumbnail: 'https://i3.ytimg.com/vi/AJEoJYgktb4/maxresdefault.jpg',
          youtubeUrl: 'https://www.youtube.com/embed/AJEoJYgktb4',
          title: 'asd',
          isPlay: false,
        },
        {
          id: 3,
          thumbnail: 'https://i3.ytimg.com/vi/PSEcZas-QZg/maxresdefault.jpg',
          youtubeUrl: 'https://www.youtube.com/embed/PSEcZas-QZg',
          title: 'The Witcher: Blood Origin - Official Teaser Trailer',
          isPlay: false,
        },
        {
          id: 4,
          thumbnail: 'https://i3.ytimg.com/vi/7iSia7rb1PY/maxresdefault.jpg',
          youtubeUrl: 'https://www.youtube.com/embed/7iSia7rb1PY',
          title: 'The Witcher: Blood Origin - Official Teaser Trailer',
          isPlay: false,
        },
      ],
      trending: [
        {
          title: 'The Witcher: Blood Origin - Official Teaser Trailer',
          releaseDate: '2022',
          imageUrl: '',
        },
        {
          title: `Marvel's Avengers: How Ms. Marvel Is the Game's Unexpected Hero – IGN
            First`,
          releaseDate: '2022',
          imageUrl: 'https://i3.ytimg.com/vi/7iSia7rb1PY/maxresdefault.jpg',
        },
        {
          title: 'The Witcher: Blood Origin - Official Teaser Trailer',
          releaseDate: '2022',
          imageUrl: '',
        },
        {
          title: `Marvel's Avengers: How Ms. Marvel Is the Game's Unexpected Hero – IGN
              First`,
          releaseDate: '2022',
          imageUrl:
            'https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        },
        {
          title: 'The Witcher: Blood Origin - Official Teaser Trailer',
          releaseDate: '2022',
          imageUrl: '',
        },
        {
          title: `Marvel's Avengers: How Ms. Marvel Is the Game's Unexpected Hero – IGN
              First`,
          releaseDate: '2022',
          imageUrl: '',
        },
        {
          title: 'The Witcher: Blood Origin - Official Teaser Trailer',
          releaseDate: '2022',
          imageUrl: '',
        },
        {
          title: `Marvel's Avengers: How Ms. Marvel Is the Game's Unexpected Hero – IGN
              First`,
          releaseDate: '2022',
          imageUrl: '',
        },
        {
          title: 'The Witcher: Blood Origin - Official Teaser Trailer',
          releaseDate: '2022',
          imageUrl: '',
        },
        {
          title: `Marvel's Avengers: How Ms. Marvel Is the Game's Unexpected Hero – IGN
              First`,
          releaseDate: '2022',
          imageUrl: '',
        },
      ],
      reviews: [
        {
          title: 'The Witcher: Blood Origin - Official Teaser Trailer',
          releaseDate: '2022',
          imageUrl: '',
          score: '9',
        },
        {
          title: `Marvel's Avengers: How Ms. Marvel Is the Game's Unexpected Hero – IGN
            First`,
          releaseDate: '2022',
          imageUrl: 'https://i3.ytimg.com/vi/7iSia7rb1PY/maxresdefault.jpg',
          score: '9',
        },
        {
          title: 'The Witcher: Blood Origin - Official Teaser Trailer',
          releaseDate: '2022',
          imageUrl: '',
          score: '8',
        },
        {
          title: `Marvel's Avengers: How Ms. Marvel Is the Game's Unexpected Hero – IGN
              First`,
          releaseDate: '2022',
          imageUrl: '',
          score: '10',
        },
        {
          title: 'The Witcher: Blood Origin - Official Teaser Trailer',
          releaseDate: '2022',
          imageUrl: '',
          score: '7',
        },
        {
          title: `Marvel's Avengers: How Ms. Marvel Is the Game's Unexpected Hero – IGN
              First`,
          releaseDate: '2022',
          imageUrl: '',
          score: '8',
        },
        {
          title: 'The Witcher: Blood Origin - Official Teaser Trailer',
          releaseDate: '2022',
          imageUrl: '',
          score: '8',
        },
        {
          title: `Marvel's Avengers: How Ms. Marvel Is the Game's Unexpected Hero – IGN
              First`,
          releaseDate: '2022',
          imageUrl: '',
          score: '9',
        },
        {
          title: 'The Witcher: Blood Origin - Official Teaser Trailer',
          releaseDate: '2022',
          imageUrl: '',
          score: '9',
        },
        {
          title: `Marvel's Avengers: How Ms. Marvel Is the Game's Unexpected Hero – IGN
              First`,
          releaseDate: '2022',
          imageUrl: '',
          score: '9',
        },
      ],
    }
  },

  getters,
}
