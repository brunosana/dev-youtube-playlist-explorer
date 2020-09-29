## Youtube Playlist Explorer

Made with ReactJS, [create-react-app](https://github.com/facebook/create-react-app), [styled-components](https://styled-components.com/) and [react-icons](https://react-icons.github.io/react-icons/)!

Based on [Youtube Developer Docs](https://developers.google.com/youtube)

### Pages

1. Home

![home](/docs/imgs/home.png)

2. Playlist

![playlist](/docs/imgs/playlist.png)

3. Videos

![videos](/docs/imgs/videos.png)

4. Watch

![Watch](/docs/imgs/watch.png)



### Notes

* Not responsive yet!
* Not API integration yet! (in progress)


## Run Application

First, you have to create a file `src/config/YoutubeData.ts`:

```javascript
export default {
    GOOGLE_API_KEY: 'YOU_GOOGLE_API_KEY',
}
```

If you don't have a Key, [see this video](https://www.youtube.com/watch?v=_U_VS12uu-o)

Install all dependencies with `yarn` on terminal, for install all dependencies

Type `yarn start` for run the application
