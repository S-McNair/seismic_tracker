This is a simple Seismic Event Tracker built for as a 72-hour hackathon project. The app uses the USGs API to collect all relevant data for seismic events around the globe and allows for the customization of the results. The Google Maps Embed API takes the latitude and longitude data from the USGs API, makes an axios GET request and provides a satellite imagery map embedded within the page when the "show map" link is clicked. In addition, a link is provided for each event which will open a new browser tab with further information about that particular seismic event, as provided by the USGS. 

The results list is customizable in several different ways, the user can:
	- display only events from a selected a date range 
	-display only events within a selected magnitude range
	-the list can be ordered by time (most recent first), magnitude or inverse magnitude
	-the user can choose the number of events to display