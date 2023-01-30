# BakerRipley Candidate Code Challenge

The intent of this challenge is to assess your debugging skills and how you navigate an unfamiliar codebase. 

The MVP (Minimum Viable Product) section below defines how the app should function once all bugs have been fixed.

## MVP

- A user should be able to click "Show People" and see a list of people along with a "Dog Info" button for each person. 

- Clicking on "Dog Info" should render that person's dog's name, breed, and age below the list of people.

## Project Structure

- index.html - The initial structure of the DOM. Take note of imports and any identifying attributes of the nodes that could be used for DOM maniuplation in the Javascript files. No changes need to be made directly to this file.

- index.js - This is the entry point for the app functionality.

- db.json - Simulates an external server that is returning data to the client (index.js). You will not need to make any changes to this file.

- api.js - Exports a single class called Api that is imported in index.js. This class simulates an api that is fetching data from an external server (db.json). You will not need to make any changes to this file.

- helpers.js - Exports a single class called HTML that is also imported in index.js. This class simply encapsulates most of the DOM manipulation logic needed to implement the functionality of the app.

## Getting Started

1. Run `npm i` to install the project dependencies.

2. Run `npm run serve-windows` or `npm run serve-mac` depending on your OS. Chrome will open in an incognito window. 

3. In Chrome, press F12 to open dev tools, navigate to the Network tab, and check the "Disable cache" box if it's not already checked.

Hot reload is enabled, so your changes will automatically be detected and reflected in the browser without needing to restarting the server.

## Problems: 

These problems must be solved in order.

1. Upon clicking the "Show People" button, you'll notice nothing happens. Determine why and implement a solution. 

2. When showing a person's dog's info, a "1" keeps rendering next to each attribute. Find and fix the bug.

3. Now that you have the "Show People" button working and rendering content, click it multiple times. Notice the list gets rendered with every button click. Add functionality to only allow the list to render once.