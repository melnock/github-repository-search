This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


### React Code Exercise

#### Objective

The objective is to build a repository search application using the Github repository search API (https://docs.github.com/en/rest/reference/search#search-repositories) that displays the results of a query. The app can query the API directly.

The list should be able to sort by GitHub's default sort key (best match) and number of stars and also should be able to filter by language.

Each result when selected should route to a detailed screen that displays information about the repository. The results should contain the repository name, description, number of stars, language, and the owners name. You can include more information as you see fit to enhance the UI.

Finally, the app should be fully responsive and follow best practices in implementing a responsive website.

#### Requirements

1. Search Input

   - An input to type in the text to search github.

2. Search results

   - Show the results of the search.

3. Sort results

   - By best match (default)
   - Stars

4. Filter results

   - By language

5. Detailed Result Page

   - A page that when a result is clicked shows a detailed screen of the repository.

6. Responsive Design

   - Should render properly on device sizes. (mobile, tablet, laptop, large desktop)

#### Implementation

- The application should be built using React.
- The application should have at least two pages:
  - Search page
  - Details page
- The application should be responsive.
- Please write your code in Javascript or Typescript

#### Evaluation

The solution will be evaluated against the following criteria:

1. **Was the code able to be built and ran locally?**
2. **Code Quality** - is the code clean, simple, commented, modern, well designed?
3. **User Experience** - how simple, intuitive, responsive and clear is the UI?
4. **Error handling** - does the code handle potential errors gracefully?
5. **Clarity** - does the repository have a detailed readme on setup/run/tests?

#### Submission

- Host the source code in a public Github repository

#### Bonus

- Tests that demonstrate the code works correctly and handles anything that might be thrown at it.
