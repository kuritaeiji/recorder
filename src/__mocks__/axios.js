export default {
  get: () => Promise.resolve({
    data: {
      items: [
        {
          id: 1,
          volumeInfo: {
            title: 'テスト1',
            authors: [ '山田太郎' ],
            publisher: 'WINGSプロジェクト',
            publishedDate: '2018-04-11',
            imageLinks: {
              smallThumbnail: 'https://wings.msn.to/books/978-4-7981-5757-3/978-4-7981-5757-3.jpg'
            }
          },
          saleInfo: {
            listPrice: { amount: 1001 }
          }
        },
        {
          id: 2,
          volumeInfo: {
            title: 'テスト2',
            authors: [ '山田次郎' ],
            publisher: 'WINGSプロジェクト',
            publishedDate: '2018-04-12',
            imageLinks: {
              smallThumbnail: 'https://wings.msn.to/books/978-4-7981-5757-3/978-4-7981-5757-3.jpg'
            }
          },
          saleInfo: {
            retailPrice: { amount: 1002 }
          }
        },
        {
          id: 3,
          volumeInfo: {
            title: 'テスト3',
            authors: [ '山田三郎' ],
            publisher: 'WINGSプロジェクト',
            publishedDate: '2018-04-13',
            imageLinks: {
              smallThumbnail: 'https://wings.msn.to/books/978-4-7981-5757-3/978-4-7981-5757-3.jpg'
            }
          },
          saleInfo: {
            retailPrice: { amount: 1003 }
          }
        }
      ]
    }
  })
}