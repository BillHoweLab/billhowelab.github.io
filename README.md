# Volitional AI Lab Website
https://billhowelab.github.io/



## To Run Locally
```bash
yarn start
```
and open `http://localhost:8000/` in your browser



## To Add Papers
1. In `components/paper-list.js`, define venue and author constants, add a new `<Paper/>` in reverse chronological order, and fill out the optional properties:
    ```
    const VENUE = `IEEE Conference`;
    const AUTHOR = 'Bill Howe';

    <Paper
        thumbnail = 'images/thumbnails/[your_120_by_62_pixel_thunbnail].png'
        title = ''
        authors = {[AUTHOR]}
        venue = {VENUE}
        date = ''
        pdf = 'paper/[add_your_own].pdf'
        acceptanceRate = {}
        awardType = {}
        video = {``}
        slides = {``}
    />
    ```
2. Add the paper PDF to the `/paper` folder
3. Add your 120 * 62 pixels thumbnail image to the `/images/thumbnails/` folder


## To Add News
1. In `index.html`, find `<div class="subtitle">News</div>` and add one `<div/>` for each news



## To Deploy
1. Before deploying to our lab website hosted on GitHub Pages, first run the website locally and make sure everything looks right to you and all the links are working
2. Commit your changes to the `gh-pages` branch, or commit to your own branch and send a pull request to merge into the `gh-pages` branch.
