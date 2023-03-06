type Media = {
  id: number;
  coverImage: { large: string };
  title: { userPreferred: string };
};

export interface AnimeData {
  data: {
    AnimeSearch: {
      media: [Media];
    };
  };
}
