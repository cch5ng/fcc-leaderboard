# Leaderboard for Free Code Camp

* Written with React, Sass, ES6. Using webpack.
  * For #freecodecamp

## Resources

Aside from Facebook's React docs, I also referred to these articles:

* https://facebook.github.io/fixed-data-table/
* https://facebook.github.io/fixed-data-table/example-sort.html
* https://facebook.github.io/fixed-data-table/getting-started.html

* https://github.com/facebook/fixed-data-table/issues/306
* https://github.com/christianalfoni/react-webpack-cookbook/wiki/Loading-CSS
* http://www.tamas.io/react-with-es6/

## Pseudocode

* Just print the table with dynamic content for default list
  * Last month's leaders

* Add a click handler to update the list order based on the selected list type (last month or total points)

* Figure out the logic to update the table (col) for the non-selected list
  * i.e. if the selected list is for last month's points
    * then the total points column will still need to be updated where the current user's total points is displayed