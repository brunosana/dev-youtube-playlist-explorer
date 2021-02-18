import api from './api';

interface ResponseData {
    items: Snippet[];
}

interface Snippet{
    id: string;
    snippet: {
        channelId: string;
        title: string;
        description: string;
        thumbnails: {
            high: {url: string;}
        }
    }
    channelTitle: string;
}

interface Playlist{
    id: string;
    channelId: string;
    channelTitle: string;
    title: string;
    description: string;
    thumbnail?: string;
}

interface Response{
    id: string;
    channelId: string;
    channelTitle: string;
    title: string;
    description: string;
    thumbnail?: string;
}

class AppPlaylistService {
  public async execute(url: string): Promise<Response> {
    const playlistId = url.split('playlist?list=')[1];
    if (!playlistId) {
      throw new Error('Invalid playlist URL');
    }

    const storagedItems = localStorage.getItem('@YoutubePlaylistExplorer::playlists');
    if (storagedItems) {
      const data = JSON.parse(storagedItems) as Playlist[];
      const checkDuplicatedPlaylistID = data.find((play) => play.id === playlistId);
      if (checkDuplicatedPlaylistID) {
        throw new Error('This playlist is already showing');
      }
    }

    const response = await api.get('/playlists', {
      params: {
        part: 'snippet',
        key: process.env.REACT_APP_GOOGLE_API_KEY,
        id: playlistId,
        maxResults: 50,
      },
    });

    if (response.status !== 200 && response.statusText !== 'ok') {
      throw new Error('Error on get playlist from Google API');
    }

    const result = response.data as ResponseData;

    const playlistDescription = result.items[0].snippet.description.split('\n').join('. ');
    const playlistDescriptionLimited = playlistDescription.length > 100
      ? `${playlistDescription.substring(0, 100)}...`
      : playlistDescription;

    const playlist: Response = {
      id: result.items[0].id,
      channelId: result.items[0].snippet.channelId,
      channelTitle: result.items[0].channelTitle,
      title: result.items[0].snippet.title,
      description: playlistDescriptionLimited,
      thumbnail: result.items[0].snippet.thumbnails.high.url,
    };

    return playlist;
  }
}

export default AppPlaylistService;
