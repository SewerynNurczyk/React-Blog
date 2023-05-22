const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: '22-02-2022',
      author: 'Sewi Nurczyk',
      category: 'Sport'
    },
    {
      id: '2',
      title: 'Article title II',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: '13-02-2012',
      author: 'Seweryn Nurczyk',
      category: 'News'
    },
    {
      id: '3',
      title: 'Article title III',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: '01-04-2026',
      author: 'Severius Nurczyk',
      category: 'Movies'
    }
  ],
  categories: [
    'Sport',
    'News',
    'Movies'
  ]
};

export default initialState;