var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>This is a weather application build on React.
               I have build this for learning purposes.
            </p>
            <p>
              Here are some of the tools i have used:
            </p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - This
                    was the javascript framework used
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a> - I used
                    Open Weather Map to search for weather data by city name.
                </li>
            </ul>
        </div>
    );
};

module.exports = About;