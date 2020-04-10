# fetching-data-from-API-with-ReactJS

![screencapture-localhost-3000-2020-04-10-18_29_54](https://user-images.githubusercontent.com/17312616/78992942-21a5ab80-7b5a-11ea-8364-3bd49af984e3.png)

#### I've used two states _"items"_ which is an array and another boolean state _"isLoaded"_ to get to know when the items have been loaded from the API

#### _componentDidMount()_ method to make API calls, inside that I've used fetch method to get the JSON data to save inside _"App_ component, inside the state to reuse it inside the component.

#### Took the states _"isLoaded" and "items"_ inside the main function. _"isLoaded"_ function will work while the data is loading and _"return()"_ function will work once the JSON data loaded successfully.
