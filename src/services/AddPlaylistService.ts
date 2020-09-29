import YoutubeConfig from '../config/YoutubeData';
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

    const { GOOGLE_API_KEY } = YoutubeConfig;

    const response = await api.get('/playlists', {
      params: {
        part: 'snippet',
        key: GOOGLE_API_KEY,
        id: playlistId,
        maxResults: 50,
      },
    });

    if (response.status !== 200 && response.statusText !== 'ok') {
      throw new Error('Error on get playlist from Google API');
    }

    const result = response.data as ResponseData;

    const playlist: Response = {
      id: result.items[0].id,
      channelId: result.items[0].snippet.channelId,
      channelTitle: result.items[0].channelTitle,
      title: result.items[0].snippet.title,
      description: result.items[0].snippet.description,
      thumbnail: result.items[0].snippet.thumbnails.high.url,
    };

    return playlist;
  }
}

export default AppPlaylistService;
