interface ResponseData {
    playlistId: string;
    nextPageToken?: string;
    items: Video[];
    pageInfo: {
        totalResults: number;
    }
}

interface Video{
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
    resourceId: {
        videoId: string;
    }
}

class GetVideosFromPlaylistService {}

export default GetVideosFromPlaylistService;
