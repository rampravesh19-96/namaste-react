# Types of testing for (developer)
 - Manual Testing => Go and check manually all the page whether its working
 - Unit testing
 - Integratio testing
 - End to End testing - e2e testing

 # Unit testing
 Test your react code in isolation it basically testing one unit of our like here take any component suppose we take header component
 and testing it with writing code called unit testing
 testing small unit of our code is called unit testing

 # Integratio testing

when we do any action in our react app it combines multiple components for performing certain operations and we all know all those component are connected with each other while doing some task so many component colllebrated with each and other 

Its intigration of so many components 
there are multiple component taling to each other we will develop a flow of an action in our react application that we will test in this testing 

for example we search some thing in search bar and find 5 cards suppose before it showing 15 cards this types of testing will do from code will do code for test this flow this 
this types of testing are known as integration testing where multiple components are envolved in talking each other


# End to End testing
Testing the react application as soon as user land on the website and to the when user leave the website will be tested all the flow

end to end testing will start from user landing on the page clicking on the login btn entering the user name password going inside it finding the restaurant adding item to the cart and checking out 

Its basically how user will flow across the application that is called end to end testing 

e2e testing requires different types of tools like Sypress Puppeteer selenium these kinds of tools are needed for end to end testing which will test whole application flow 

# As a developer majorily concerned about unit testing and integration testing 

In some company testing is a part of development testing is also part of coding whenevr we write code for any functionality 
developerd also needs to write test case for those functionality



# React testing library 
it is built upon top of the DOM testing library for adding features related react

React testing library uses JEST which javascript testing framework with a focus on simplicity 

DOM and React Testing library both uses JEst inside it 

# Installing React Testing Library From Scratch

npm i -D  @testing-library/react
npm i -D jest
npm install --save-dev babel-jest @babel/core @babel/preset-env
npx jest --init

# Setting Up Testing in Our App
 - Install React Testing Library
 - Install Jest
 - Install Babel dependencies from jest website
 - Configure babel 
 - Configure parcel config file to disable default babel transpilation  from parcel website 
 - Jest  - npx jest --init
 - install jsdom library
 - install @babel/preset-react - to make jsx work in test cases
 - include @babel/preset-react inside my babel config
 - install @testing-library/jest-dom
    
# JS DOM
Its alternate environment for browser for running test case

# If you're using Jest 28 or later, jest-environment-jsdom package now must be installed separately.
npm install --save-dev jest-environment-jsdom

__ => its is called dunder

folder with name __tests__ called dunder test

two underscore before and two under score after of any file called dunder 
