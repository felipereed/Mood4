![](https://miro.medium.com/max/1000/1*FKMtgVPYowHMQ-L7Kz9oIQ.gif)
# Mood4 App https://focused-pare-4cc9da.netlify.app/home

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
    <!-- - [Helper Functions](#Helper-Functions) -->
  - [Post-MVP](#Post-MVP)
- [Project Delivery](#Project-Delivery)
  - [Code Showcase](#Code-Showcase)
  <!-- - [Code Issues & Resolutions](#Code-Issues--Resolutions) -->

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
|   React Bootstrap  | _Used to customize the dropdown menus._ |
|   React Select  | _Used to simplify the dropdown component._ |
|   React Static Google Maps  | _Used to display Google Maps images._ |
<br>

#### Data

|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| Yelp Fusion|      yes      | _api.yelp.com_ | _http://api.yelp.com/v3/businesses/search?term=broadway show&location=new-york&limit=50_ |
| Google Maps|      yes      | _maps.googleapis.com_ | _https://maps.googleapis.com/maps/api/staticmap?center=Berkeley,CA&zoom=14&size=400x400&key=YOUR_API_KEY_ |
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
      |__ Results.jsx
      |__ GoogleMaps.jsx
      |__ Detail.jsx
```

<br>

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|      App     | functional |   n   |   n   | _The Main container of the application._               |
|    Header    | functional |   n   |   n   | _The header will contain the App logo._               |
|  Home  | functional |   y   |   y   | _Shows the first page which lets user select business activity and location._       |
|   Dropdown    |   functional    |   n   |   y   | _Shows a title and a dropdown list._      |
|    Footer    | functional |   n   |   y   | _Decorative with my name._ |
|    Results    | functional |   y   |   y   | _The container that will have the filter and Detail components._               |
|    Detail    | functional |   y   |   y   | _An image and basic information about the activity or business._              |
|    Google Maps    | functional |   n   |   y   | _An image of a map based on the location._              |

<br>

#### Component Estimates

| Task                | Priority | Estimated Time | Actual Time |
| ------------------- | :------: | :------------: | :---------: |
| App                 |    H     |     2 hrs      |     4 hrs   |
| Header              |    H     |     2 hrs      |     2 hrs   |
| Home                |    H     |     6 hrs      |    16 hrs   |
| Dropdown            |    H     |     3 hrs      |     6 hrs   |
| Footer              |    H     |     2 hrs      |     1 hr    |
| Results             |    H     |     10 hrs     |    10 hrs   |
| Filter              |    H     |     9 hrs      |     N/A     |
| Detail              |    H     |     6 hrs      |     8 hrs   |
| Google Maps         |    H     |     N/A        |    10 hrs   |
| Total               |          |     40 hrs     |    57 hrs   |

<br>

<!-- #### Helper Functions

|  Function  | Description                                |
| :--------: | :----------------------------------------- |
| TBD | _TBD._ |

<br> -->

### Post-MVP

- _Get user's location._
- _Get help from UX Design student._
- _Implement Google Maps._


<br>

***

## Project Delivery

### Code Showcase

This is the hidden area in the details container that, when displayed, calls the Google Maps API. This renders an empty div until mapIsLoaded is set to true. I did that because I didn't want to call the Google Maps API until the Map button is clicked. 

```
<div className={displayMap}>      
  {mapIsLoaded ? loadMap() : <div></div> }
  <h2>{details[0].name}</h2>
  <p>{details[0].location.display_address[0]} <br /> {details[0].location.display_address[1]}</p>
  <a href={details[0].url} target='_blank'>Click here for more details</a>
  <p>{details[0].display_phone}</p>
  <button className='map-button' onClick={backToResult}>Hide Map</button>
</div>
```

<!-- ### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like. -->