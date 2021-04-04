# start project

## Table of Contents

- [About the Project](#about-the-project)
- [Installation](#installation)
- [Deploying To GitHub Pages](#deploying-to-github-pages)
- [License](#license)

## About the Project

This repo perform as boilerplate for simple front-end projects using Sass and Gulp 4.

## Installation

1- Download zip folder or clone project > https://github.com/sarah27h/bootstrap4.6-starter.git

`git clone https://github.com/sarah27h/bootstrap4.6-starter.git <add-your-project-name>`

2- Open Github and create new repo.

3- Remane the old repo upstream & change the local repo 'origin' that points to new repo.

```
git remote rename origin upstream
git remote add origin http://github.com/YOU/YOUR_NEW_REPO

```

4- push to your new repo `git push origin master`

5- To get changes from upstream `git fetch upstream`.

6- Install all project dependencies `npm install`.

7- cd to your project directory.

    - For develoment mode `gulp`.

    - For production `gulp build --production`.

## Deploying To GitHub Pages

    - `npm install gulp-gh-pages --save-dev`.
    - In your gulp file add.

     ```
        const deploy = require('gulp-gh-pages');

        // deploy to github pages
        const options = {
            branch: 'master'
        };

        function publish() {
            return src('./dist/**/*').pipe(deploy(options));
        }
    ```
    - add publish task into build task

    ```
        // to produce a production version
        exports.build = series(
        cleanDistForBuild,
        parallel(
            scssTask,
            jsTask,
            images,
            templateTask,
            templatePagesTask,
            copyImagesTask,
            copyfontawesomeWebfontsTask
        ),
        publish
        );
    ```

## License

This project is licensed under the terms of the <a href="https://choosealicense.com/licenses/mit/" rel="nofollow">MIT</a> license.
