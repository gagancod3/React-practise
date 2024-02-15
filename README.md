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