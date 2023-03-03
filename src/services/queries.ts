export const basicQuery = `{
      Media (id:15125, type: ANIME){
          id
          title{
              romaji
              english
              native
          }
      }
    }
  `;

export const pageInfoQuery = `{
    Page (page: 1, perPage: 3) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        media (id: 15125, search: "") {
          id
          title {
            romaji
          }
        }
      }
  }`;

export const animeQuery = (name: string) => ` 
{
    AnimeSearch: Page {
      media(search: "${name}", type: ANIME) {
        id
        title {
          userPreferred
        }
        coverImage {
          large
        }
      }
    }
    CharacterSearch: Page {
        characters(search: "${name}") {
          id
          name {
            first
            last
          }
          image {
            large
          }
        }
      }
      StudioSearch: Page {
        studios(search: "${name}") {
          id
          name
        }
      }
  }`;


