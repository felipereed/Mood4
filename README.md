![alt text](https://i2.wp.com/brightestyoungthings.com/wp-content/uploads/2017/10/tumblr_static_tumblr_static__640.gif?resize=540%2C304&quality=100 "space gif")
# Mood4 App

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
<!-- - [Project Delivery](#Project-Delivery)
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions) -->

## Project Planning

<br>

### Overview

_What are you in the mood for? **MOOD4** helps you find it. This app gives you some options based on the location you pick and the type of business or activity you’re in the mood for._

<br>

### Wireframes

- Mobile Version
![alt text](https://i.imgur.com/5ZpfaNW.png "mobile mockup")

- Tablet Version
![alt text](https://i.imgur.com/cis2Kp4.png "tablet mockup")

- Desktop Version
![alt text](https://i.imgur.com/RiGUmxs.png "desktop mockup")

<br>

### MVP

_The user will be able to select a type of business or activity and location. The **MOOD4** application will provide multiple results with a picture and some basic information related to the search criteria selected._

<br>

#### Goals

- _Implement all the features._
- _Provide a good UX._

<br>

#### Libraries

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   Axios   | _Used to make API request._ |
|   React Router   | _Used to manage component routes._ |

<br>

#### Data

|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| Yelp Fusion|      yes      | _api.yelp.com_ | _http://api.yelp.com/v3/businesses/search?term=broadway show&location=new-york&limit=50_ |

<br>

#### Component Hierarchy

```
src
|__ assets/
      |__ mockups
      |__ JSON configuration files
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

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|      App     | functional |   y   |   y   | _The Main container of the application._               |
|    Header    | functional |   y   |   y   | _The header will contain the App logo._               |
|  Home  | functional |   y   |   y   | _Shows the first page which lets user select business activity and location._       |
|   Dropdown    |   functional    |   y   |   y   | _Shows a title and a dropdown list._      |
|    Footer    | functional |   y   |   y   | _Decorative with my name._ |
|    Detail    | functional |   y   |   y   | _The container that will have the filter and result components._               |
|    Filter    | functional |   y   |   y   | _A number of dropdowns that can filter results._              |
|    Result    | functional |   y   |   y   | _An image and basic information about the activity or business._              |

<br>

#### Component Estimates

| Task                | Priority | Estimated Time | Actual Time |
| ------------------- | :------: | :------------: | :---------: |
| App                 |    H     |     2 hrs      |     TBD     |
| Header              |    H     |     2 hrs      |     TBD     |
| Home                |    H     |     6 hrs      |     TBD     |
| Dropdown            |    H     |     3 hrs      |     TDB     |
| Footer              |    H     |     2 hrs      |     TBD     |
| Detail              |    H     |     6 hrs      |     TBD     |
| Filter              |    H     |     9 hrs      |     TBD     |
| Result              |    H     |     10 hrs     |     TBD     |
| Total               |          |     40 hrs     |     TBD     |

<br>

#### Helper Functions

|  Function  | Description                                |
| :--------: | :----------------------------------------- |
| TBD | _TBD._ |

<br>

### Post-MVP

- _Get user's location._
- _Get help from UX Design student._
- _Implement Google Maps._


<br>

***
<!-- 
## Project Delivery

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like. -->