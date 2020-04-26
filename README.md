# Mood4 App

# PROJECT 2 README <!-- omit in toc -->

- [Project Planning](#Project-Planning)
  - [Overview](#Overview)
  - [Wireframes](#Wireframes)
  - [MVP](#MVP)
    - [Goals](#Goals)
    - [Libraries](#Libraries)
    - [Data](#Data)
    - [Component Hierarchy](#Component-Hierarchy)
    - [Component Breakdown](#Component-Breakdown)
    - [Component Estimates](#Component-Estimates)
    - [Helper Functions](#Helper-Functions)
  - [Post-MVP](#Post-MVP)
- [Project Delivery](#Project-Delivery)
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions)

## Project Planning

<br>

### Overview

_What are you in the mood for? **MOOD4** helps you find it. This app gives you some options based on the location you pick and the type of business or activity you’re in the mood for._

<br>

### Wireframes

![alt text](https://i.imgur.com/5ZpfaNW.png "mobile mockup")

- Mobile Version

![alt text](https://i.imgur.com/cis2Kp4.png "tablet mockup")

- Tablet Version

![alt text](https://i.imgur.com/RiGUmxs.png "desktop mockup")

- Desktop Version

<br>

### MVP

_The **MOOD4** MVP Will be able to display types of businesses and activities. Location (cities, neighborhoods). For restaurants - price range and cuisine. Also able to display options for the user based on location and type of business/activity. User need to be able to get more options._

<br>

#### Goals

- _Implement all the features._
- _Have a simple but functional layout._

<br>

#### Libraries

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   TBD   | _TBD_ |

<br>

#### Data

|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| Yelp Fusion|      yes      | _yelp.com_ | _https://www.yelp.com/biz/marumi-new-york?osq=marumi_ |

<br>

#### Component Hierarchy

```
src
|__ assets/
      |__ mockups
|__ components/
      |__ App.jsx
      |__ Header.jsx
      |__ Home.jsx
      |__ Dropdown.jsx
      |__ Footer.jsx
      |__ Detail.jsx
      |__ Filter.jsx
      |__ Result.jsx
```

<br>

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|      App     | functional |   n   |   n   | _Describe._               |
|    Header    | functional |   n   |   n   | _The header will contain the App logo._               |
|  Home  | functional |   n   |   n   | _Describe._       |
|   Dropdown    |   class    |   y   |   n   | _Describe._      |
|    Footer    | functional |   n   |   n   | _Describe._ |
|    Detail    | functional |   n   |   n   | _Describe._               |
|    Filter    | functional |   n   |   n   | _Describe._              |
|    Result    | functional |   n   |   n   | _Describe._              |

<br>

#### Component Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above. 
>
> Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

<br>

#### Helper Functions

> Use this section to document all helper functions– generic functions that can be reused in other applications.

|  Function  | Description                                |
| :--------: | :----------------------------------------- |
| Capitalize | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

### Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

- _Add user account and auth capabilities._
- _Utilize the Giphy API to welcome new users with funny gifs._

<br>

***

## Project Delivery

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.