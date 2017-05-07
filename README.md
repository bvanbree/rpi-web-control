Monitor Your Terrarium With the Raspberry Pi B+	
===============

This is is a terrarium-themed interface for the code of the [Monitor Your Home With the Raspberry Pi B+](https://www.openhomeautomation.net/monitor-your-home-raspberry-pi-b/) article on the Open Home Automation website. 

This modification displays circular guages for temperature and humidity alongside the camera image on one page. It includes configurable expected ranges for temperature and humidity, and will display a warning color when the sensor readings fall outside that range. There are also optional configurations for night expected reading ranges.

How To Configure
------
Update src/js/config.js with your values.

How To Build/Run
------
Follow all instructions in the original article. Before running the program, do the following:

1. Enter the command **npm install**
2. Enter the command **gulp** to combine and minify the javascript and stylesheets.
3. Finally, run the program with the command **sudo node pi_node.js**