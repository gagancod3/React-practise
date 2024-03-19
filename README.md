# React Learnings

# Parcel
- Dev Build
- Local Server
- HMR (Hot Module replacement)
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browser
- Diagnostic
- Error Handling
- HTTPS
- Tree Shaking - remove unused code
- Different dev and Prod bundles

---app structure---
/*
Header - 
    logo 
    nav links – home, about, cart
Body – 
    Search with a button
    restaurant container 
        restaurant card (with details like ratings etc)
Footer – 
    copyright
    Links
    contact details 
*/

Types of export/Import

-Default export/Import

export default Component;
import Component from "path";

- Named Export/Import

export const Component;
import {Component} from "path";

React Hooks
(Normal JS utility functions)

- useState()
- useEffect()


# use VS code shortcut to write boiler code for component - "rafce"

# Two Types of routing in WebApps
- Client Side Routing
- Server Side Routing

# Redux ToolKit
- install the library - @reduxjs/toolKit and react-redux 
- npm i @reduxjs/toolkit 
- npm i react-redux
- Build our Redux Store
- Connect our store to our app
- Slice (CartSlice) 
- dispatch (action)
- Selector (read data)

# Testing (developer)
- Unit testing
- Integration testing
- End to End testing (e2e testing)

# Setting up Testing in our app
- Install Reat testing Library
- Installed Jest
- Installed Babel Dependencies
- Configure Babel (create babel.config.js file)
- Configure Parcel Config file to disable default babel transpilation
- Jest Configuration : npx jest --init
- Install jsdom library
- Install npm i @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- Install npm i -D @testing-library/jest-dom

