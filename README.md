
## Overview

**HealthElite** 

## MVP

- Login and Signup functionality
- Full user CRUD on Posts and Reviews
- Styled with CSS

### Goals

- Create an intuitive application that is understandable for all users
- Demonstrate understanding of full CRUD capabilities

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Component-based JS library for building user interfaces |
|   React Router   | Navigational React components |
| Axios | Promised-based HTTP client |
|     Ruby on Rails      | Backend framework for creating a rest API |


<br>

### Client (Front End)

#### Wireframes

[Wireframes](https://whimsical.com/layouts-Ducgjk8giFr6jR7gyiC3YH)


#### Component Tree

[Component Tree](https://whimsical.com/component-hierarchy-bWXL2647ascLXjUjZYojH)

#### Component Architecture

``` structure

src
|__ components/
      |__ Card.jsx
      |__ Nav.jsx
|__ layout/
      |__ Layout.jsx
|__ screens/
      |__ Home.jsx
      |__ Login.jsx
      |__ Register.jsx
      |__ Products.jsx
      |__ ProductDetail.jsx
      |__ ProductEdit.jsx
      |__ ProductCreate.jsx
      |__ Reviews.jsx
      |__ ReviewEdit.jsx
      |__ ReviewCreate.jsx
|__ services/
      |__ api-config.js
      |__ products.js
      |__ reviews.js
|__ containers/
      |__ PostContainer.jsx
      |__ ReviewContainer.jsx

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Planning Wireframes - Desktop   |    H     |     3 hrs      |     2.5 hrs     |    2.5 hrs    |
| Planning Wireframes - Mobile    |    H     |     3 hrs      |     2 hrs     |    2 hrs    |
| BE Create Folders/Files    |    H     |     .5 hrs      |      hrs     |     hrs    |
| BE Create DB / Schema    |    H     |     1 hrs      |      hrs     |     hrs    |
| BE User Auth    |    H     |     1 hrs      |      hrs     |     hrs    |
| BE Route Set Up    |    H     |     .5 hrs      |      hrs     |     hrs    |
| FE Create React Client    |    H     |     .5 hrs      |      hrs     |     hrs    |
| FE API Call Set Up    |    H     |     2 hrs      |      hrs     |     hrs    |
| FE Display Products on List    |    H     |     2 hrs      |      hrs     |     hrs    |
| FE Display Product Details    |    H     |     2 hrs      |      hrs     |     hrs    |
| FE Create Forms for Login/Register    |    H     |     3 hrs      |      hrs     |     hrs    |
| FE User Authentication    |    H     |     3 hrs      |      hrs     |     hrs    |
| FE Links/Routes Set Up    |    H     |     3 hrs      |      hrs     |     hrs    |
| CSS Home Screen    |    H     |     3 hrs      |      hrs     |     hrs    |
| CSS Product List Screen    |    H     |     3 hrs      |      hrs     |     hrs    |
| CSS Product Create Screen    |    H     |     3 hrs      |      hrs     |     hrs    |
| CSS Product Detail Screen    |    H     |     3 hrs      |      hrs     |     hrs    |
| CSS Product Edit Screen    |    H     |     3 hrs      |      hrs     |     hrs    |
| CSS Product - Reviews Screen    |    H     |     3 hrs      |      hrs     |     hrs    |
| CSS Review Edit Screen    |    H     |     3 hrs      |      hrs     |     hrs    |
| CSS Review Create Screen    |    H     |     3 hrs      |      hrs     |     hrs    |

| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

<br>

### Server (Back End)

#### ERD Model

[ERD](https://imgur.com/OG0Jly1)
<br>

***

## Post-MVP

- Create a 'My Submissions' screen for user to see their own products/reviews submissions
- Create modal on mobile to navigate different categories
- Develop query to calculate average star (1-5) rating on each product
- Create external link for users to post/edit products with a 'where to purchase'
- Categorize each product into respective silo

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
