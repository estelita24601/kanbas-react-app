# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
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

# Code Graveyard

```{html}
<ul id="wd-modules" className="list-group rounded-0 mt-4">
    {/* MODULE 1 */}
    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
        {/* Module Title Bar */}
        <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 1 - Course Intro
            <ModuleControlButtons />
        </div>

        {/* list for one module's content */}
        <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <b>LEARNING OBJECTIVES</b>
                <LessonControlButtons />
            </li>

            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                Introduction to the course
                <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                Learn what is Web Development
                <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                Create a development environment
                <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                Creating a Web Application
                <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                Getting started with the 1st assignment
                <LessonControlButtons />
            </li>

            <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <b>READING</b>
                <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                Chapter 1 - Introduction
                <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                Chapter 2 - Creating User Interfaces with HTML
                <LessonControlButtons />
            </li>

            <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <b>SLIDES</b>
                <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                Introduction to Web Development
                <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                Creating an HTTP server with Node.js
                <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                Creating a React Application
                <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                Commit your source to Github.com
                <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                Deploying to Netlify
                <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                Deploying multiple branches in Netlify
                <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                Introduction to HTML and the DOM
                <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                Headings and Paragraphs
                <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                Lists and Tables
                <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                Creating Web Forms
                <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                Navigating with Anchors
                <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                Single Page Navigation
                <LessonControlButtons />
            </li>
        </ul>
    </li>
    <br />

    {/* MODULE 2 */}
    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
        {/* Module Title Bar */}
        <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 2 - Formatting User Interfaces with HTML
            <ModuleControlButtons />
        </div>

        {/* Module Content */}
        <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <b>LEARNING OBJECTIVES</b>
                <LessonControlButtons />
            </li>

            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                Learn how to create user interfaces with HTML
                <LessonControlButtons />
            </li>

            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                Keep working on assignment 1
                <LessonControlButtons />
            </li>

            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                Deploy the assignment to Netlify
                <LessonControlButtons />
            </li>

            <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <b>READING</b>
                <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                Chapter 1 - Introduction
                <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                Chapter 2 - Creating User Interfaces with HTML
                <LessonControlButtons />
            </li>

            <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <b>SLIDES</b>
                <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                Embedding content with Iframes
                <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                Drawing with Scalable Vector Graphics
                <LessonControlButtons />
            </li>
        </ul>
    </li>
    <br />

    {/* MODULE 3 */}
    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
        {/* Module Title Bar */}
        <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 3 - Styling User Interfaces with CSS
            <ModuleControlButtons />
        </div>

        {/* Module Content */}
        <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <b>LEARNING OBJECTIVES</b>
                <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                Introduction to CSS
                <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                Selectors
                <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                Color and Background Color
                <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                Dimensions and Positions
                <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                The Box Model
                <LessonControlButtons />
            </li>

            <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <b>READING</b>
                <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                Chapter 3 - Styling User Interfaces With CSS
                <LessonControlButtons />
            </li>

            <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <b>SLIDES</b>
                <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                Intro to Cascading Style Sheets
                <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                Styling with Colors
                <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                The Box Model
                <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                Size & Position
                <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                Float
                <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                Rotating content & Gradient background
                <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item ps-1">
                <BsGripVertical className="me-5 fs-3" />
                Flex
                <LessonControlButtons />
            </li>
        </ul>
    </li>
    <br />
</ul>


{/* first assignment */}
<li className="wd-assignment-list-item list-group-item p-3 ps-1">

    <div className="row">
        {/* left most icons */}
        <div className="d-flex col-auto align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <MdAssignment className="me-2 fs-3" />
        </div>

        {/* assignment title inside of a link */}
        <div className="col d-flex flex-column align-items-start">
            <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                A1 - ENV + HTML
            </a>
            <span>
                <span className="text-danger fw-bold">Multiple Modules </span> | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13
                at 11:59pm | 100 pts
            </span>
        </div>

        {/* rightmost buttons */}
        <div className="d-flex col-auto align-items-center">
            <LessonControlButtons />
        </div>
    </div>
</li>

{/* second assignment */}
<li className="wd-assignment-list-item list-group-item p-3 ps-1">

    <div className="row">
        {/* left most icons */}
        <div className="d-flex col-auto align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <MdAssignment className="me-2 fs-3" />
        </div>

        {/* assignment title inside of a link */}
        <div className="col d-flex flex-column align-items-start">
            <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                A2 - CSS + BOOTSTRAP
            </a>
            <span>
                <span className="text-danger fw-bold">Multiple Modules </span> | <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May 20
                at 11:59pm | 100 pts
            </span>
        </div>

        {/* rightmost buttons */}
        <div className="d-flex col-auto align-items-center">
            <LessonControlButtons />
        </div>
    </div>
</li>

{/* third assignment */}
<li className="wd-assignment-list-item list-group-item p-3 ps-1">

    <div className="row">
        {/* left most icons */}
        <div className="d-flex col-auto align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <MdAssignment className="me-2 fs-3" />
        </div>

        {/* assignment title inside of a link */}
        <div className="col d-flex flex-column align-items-start">
            <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                A3 - JAVASCRIPT + REACT
            </a>
            <span>
                <span className="text-danger fw-bold">Multiple Modules </span> | <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 27
                at 11:59pm | 100 pts
            </span>
        </div>

        {/* rightmost buttons */}
        <div className="d-flex col-auto align-items-center">
            <LessonControlButtons />
        </div>
    </div>
</li>

{/* fourth assignment */}
<li className="wd-assignment-list-item list-group-item p-3 ps-1">

    <div className="row">
        {/* left most icons */}
        <div className="d-flex col-auto align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <MdAssignment className="me-2 fs-3" />
        </div>

        {/* assignment title inside of a link */}
        <div className="col d-flex flex-column align-items-start">
            <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                A4
            </a>
            <span>
                <span className="text-danger fw-bold">Multiple Modules </span> | <b>Not available until</b> Oct 5 at 12:00am | <b>Due</b> Oct 31
                at 11:59pm | 100 pts
            </span>
        </div>

        {/* rightmost buttons */}
        <div className="d-flex col-auto align-items-center">
            <LessonControlButtons />
        </div>
    </div>
</li>
```
