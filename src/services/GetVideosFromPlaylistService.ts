import api from './api';

interface ResponseData {
    playlistId: string;
    nextPageToken?: string;
    items: VideoResponse[];
    pageInfo: {
        totalResults: number;
    }
    haveMore?: boolean;
}

interface VideoResponse{
    id: string;
    snippet: {
        channelTitle: string;
        channelId: string;
        title: string;
        description: string;
        thumbnails: {
            high: {url: string;}
        }
        resourceId: {
            videoId: string;
        }
    }
}

interface Videos {
    videos: Video[];
    hasMore?: boolean;
}

interface Video{
    id: string;
    videoid: string;
    title: string;
    description: string;
    channelTitle: string;
    channelId: string;
    thumb: string;
}

class GetVideosFromPlaylistService {
  public async execute(playlistId: string): Promise<Videos | null> {
    if (!playlistId) {
      throw new Error('Invalid playlist id');
    }

    const response = await api.get('/playlistItems', {
      params: {
        part: 'snippet',
        playlistId,
        maxResults: 50,
        key: process.env.REACT_APP_GOOGLE_API_KEY,
      },
    });

    if (response.status !== 200 && response.statusText !== 'ok') {
      throw new Error('Error on get playlist from Google API');
    }

    const result = response.data as ResponseData;

    if (!result.items.length || result.items.length === 0) {
      return null;
    }

    const videos: Video[] = [];
    result.items.forEach((video) => {
      videos.push({
        id: video.id,
        videoid: video.snippet.resourceId.videoId,
        title: video.snippet.title,
        description: video.snippet.description,
        thumb: video.snippet.thumbnails.high.url,
        channelTitle: video.snippet.channelTitle,
        channelId: video.snippet.channelId,
      });
    });

    const playlistVideos: Videos = {
      hasMore: !!result.nextPageToken,
      videos,
    };

    return playlistVideos;
  }
}

export default GetVideosFromPlaylistService;
