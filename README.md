## Overview

HealthElite - A place for users to share their experiences and reviews of nutritional supplements that either helped or hindered

- [Deployed Site](https://healthelite.netlify.app/)

## MVP

- Authentication functionality
- Full user CRUD on Posts and Reviews
- Styled with CSS

### Goals

- Create an intuitive application that is understandable for all users
- Demonstrate understanding of full CRUD capabilities

<br>

### Libraries and Dependencies

|    Library    | Description                                             |
| :-----------: | :------------------------------------------------------ |
|     React     | Component-based JS library for building user interfaces |
| React Router  | Navigational React components                           |
|     Axios     | Promised-based HTTP client                              |
| Ruby on Rails | Backend framework for creating a rest API               |

<br>

### Client (Front End)

#### Wireframes

- [Desktop](https://whimsical.com/layouts-Ducgjk8giFr6jR7gyiC3YH)

- [Mobile](https://whimsical.com/screens-mobile-JdNbzwZNaCV6H9QK8VR5sN)

#### Component Tree

- [HealthElite Component Tree](https://whimsical.com/component-hierarchy-bWXL2647ascLXjUjZYojH)

#### Component Architecture

```structure

src
|__ components/
      |__ Nav.jsx
|__ layout/
      |__ Layout.jsx
|__ screens/
      |__ css/
            |__ Home.css
            |__ Login.css
            |__ Categories.css
            |__ ProductCreate.css
            |__ ProductDetail.css
            |__ ProductEdit.css
            |__ Products.css
            |__ Register.css
            |__ ReviewCreate.css
            |__ ReviewEdit.css
      |__ Home.jsx
      |__ Login.jsx
      |__ Categories.jsx
      |__ Products.jsx
      |__ ProductDetail.jsx
      |__ ProductEdit.jsx
      |__ ProductCreate.jsx
      |__ Register.jsx
      |__ ReviewEdit.jsx
      |__ ReviewCreate.jsx
|__ services/
      |__ api-config.js
      |__ auth.js
      |__ categories.js
      |__ products.js
      |__ reviews.js
|__ containers/
      |__ MainContainer.jsx

```

#### Time Estimates

| Task                               | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Planning Wireframes - Desktop      |    H     |     3 hrs      |    2.5 hrs    |   2.5 hrs   |
| Planning Wireframes - Mobile       |    H     |     3 hrs      |     2 hrs     |    2 hrs    |
| BE Create Folders/Files            |    H     |     .5 hrs     |    .5 hrs     |   .5 hrs    |
| BE Create DB / Schema              |    H     |     1 hrs      |     2 hrs     |    2 hrs    |
| BE User Auth                       |    H     |     1 hrs      |     1 hrs     |    1 hrs    |
| BE Route Set Up                    |    H     |     .5 hrs     |     3 hrs     |    3 hrs    |
| FE Create React Client             |    H     |     .5 hrs     |    .5 hrs     |   .5 hrs    |
| FE API Call Set Up                 |    H     |     2 hrs      |     2 hrs     |    2 hrs    |
| FE Display Products on List        |    H     |     2 hrs      |     3 hrs     |    3 hrs    |
| FE Display Product Details         |    H     |     2 hrs      |     3 hrs     |    3 hrs    |
| FE Create Forms for Login/Register |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| FE User Authentication             |    H     |     3 hrs      |     2 hrs     |    2 hrs    |
| FE Links/Routes Set Up             |    H     |     3 hrs      |     5 hrs     |    5 hrs    |
| CSS Home Screen                    |    H     |     3 hrs      |     2 hrs     |    2 hrs    |
| CSS Product List Screen            |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| CSS Product Create Screen          |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| CSS Product Detail Screen          |    H     |     3 hrs      |     5 hrs     |    5 hrs    |
| CSS Product Edit Screen            |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| CSS Product Reviews Screen         |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| CSS Review Edit Screen             |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| CSS Review Create Screen           |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| TOTAL                              |          |    48.5 hrs    |   54.5 hrs    |  54.5 TBD   |

<br>

### Server (Back End)

#### ERD Model

- [ERD](https://imgur.com/a/K75i8mW)
  <br>

---

## Post-MVP

- User authentication to determine which products and reviews and available to edit based on authoration token
- Create modal on mobile to navigate different categories
- Develop query to calculate average star (1-5) rating on each product
- Create external link for users to post/edit products with a 'where to purchase'
- Categorize each product into respective silo

---

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
