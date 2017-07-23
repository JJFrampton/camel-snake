# camel-snake package

A short description of your package.

![A screenshot of your package](https://f.cloud.github.com/assets/69169/2290250/c35d867a-a017-11e3-86be-cd7c5bf3ff9b.gif)
$ git log --oneline --graph
* b462525 M.1 reordered functions, now allows for all to be declared with 'let'
* acf529e M.1 refactored dry code
* 4d2fb53 M.1 camel-snake completed
* 3e7585f M.1 camel case working
* 2e6b67f M.1 Initial commit for atom package 'camelsnake'

^ are the lost commits when forcing a push from a new directory

Full commits (missing last refactor):
$ git log
commit acf529e6dbc7ef8c63fbe7768db25fef0aefc76d
Author: Joseph Frampton <josephframpton@Josephs-MacBook-Pro.local>
Date:   Sun Jul 23 09:43:10 2017 -0600

    M.1 refactored dry code

commit acf529e6dbc7ef8c63fbe7768db25fef0aefc76d
Author: Joseph Frampton <josephframpton@Josephs-MacBook-Pro.local>
Date:   Sun Jul 23 09:43:10 2017 -0600

    M.1 refactored dry code

    -questions: scoping on let vs var
      - normalize(let) can be used inside another function
      - toCamel(var) can not be used if declared with 'let'

    JJF

commit 4d2fb53bdeadc5d9e39ed21ba4b1cb7de1ddff43
Author: Joseph Frampton <josephframpton@Josephs-MacBook-Pro.local>
Date:   Sun Jul 23 09:18:03 2017 -0600

    M.1 camel-snake completed

    JJF

commit 3e7585fa70d5606cf899aa95e8b8ccf0ae5427b9
Author: Joseph Frampton <josephframpton@Josephs-MacBook-Pro.local>
Date:   Sun Jul 23 00:50:34 2017 -0600

    M.1 camel case working

    JJF

commit 2e6b67fb42b486de59373b844914b266ddcec1d4
Josephs-MacBook-Pro:atom-camelsnake josephframpton
