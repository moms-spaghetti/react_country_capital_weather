# React Country Weather Data

Created using React and utilised two api calls to retrieve country data including a background flag and country weather data. Also includes a drop down search which populates with similar searches and can be accessed via a drop down at the right hand side.\
[View Demo](https://moms-spaghetti-reactpanelthings.netlify.app/)
<br/><br/>

## Details

This project was originally my submission for the Friday hackathon at the School of Code. The original concept followed the vision of this app but required significant refactoring. I restarted the project to correct the mistakes made the in hackathon and improve the ui, layout and functionality.\
The app uses two API calls to get weather data from open weather map and country statistics from restcountries.eu. This data is stored in states and passed to components below for rendering.\
I also explored deeper into css options to apply the country flag as the background image after searches and apply a lower opacity in keeping with the vision I had for the application whilst maintaining full opacity for the elements above. The background is also fully responsive and maintains a good aspect ratio for different window sizes. This can vary depending on country flag ratios.\
Searching partial country names is possible and I overcame issues with limited country data being returned correctly to the drop down menu and certain countries being unsearchable. After a search, country data and weather data will be displayed in the bar on the left.
<br/><br/>

## Built With

- HTML
- CSS
- Javascript
- Create React App
- JSX
- uuid
- dotenv
  <br/><br/>

## Getting Started

Clone the repo as instructed below and download npm modules.
<br/><br/>

## Prerequisites

Download and install npm modules.
You will need an .env file in the root folder containing an API key from open weather map.
<br/><br/>

## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/moms-spaghetti/react_country_capital_weather.git
   ```
2. Download the required npm modules
   ```sh
   npm i
   ```
3. Create a .env file in the root folder with the prefix REACT_APP_APIKEY= then follow with your API from open weather map. You will have to create this on their site with an account.
4. Start the applicataion
   ```sh
   npm start
   ```
   <br/><br/>

## Usage

Enter a country name in the search box followed by pressing enter and data and the flag for that country will be displayed. Partial country data can be entered and the data for the closest match will be displayed. Hovering over the input box will show an arrow showing partial matches related to the partial search.
<br/><br/>

## Contact

[Email](mailto:williamedwards36@aol.com)
<br/><br/>
