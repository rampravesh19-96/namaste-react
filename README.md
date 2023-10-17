# Namaste React

# Parcel 
- Dev Build
- Local Server
- HMR = Hot Module Replacement => auto refresh heppening of parcel doing HMR
- File Watching Alogorithm - Written in C++
- Caching - faster Builds
- Image Optimization 
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting 
- Differential Bundling - Support Older Browser
- Diagonostic
- Error handling
- HTTPs
- Tree Shaking - Remove Unused Code
- Different development and Production bundles

# Namaste food
/**
* Header
*  - Logo
*  - Nav Items
* Body
*  - Search
*  - RestaurantContainer
*    - RestaurantCard
*        - Img
*        - Name of res, Star Rating, Cuisine, Delevery time
* Footer
*  - CopyRight
*  - Links
*  - Address
*  - Contact
*/

# Commands
npx parcel index.html work even when package.json file has main like app.js
but npx parcel build index.html we have to remove main app.js from package.json file

# Extension
barcket pair colorization
preetier
Eslint
better comment

# JSX => ReactElement => HTML
first JSX is converted or compiled or transpiled to ReactElement by transpiler called babel and then while rendering by root.render()
it becomes pure HTML code which broowser understand

JSX is a smaller syntax for reactElemet that looks like html 

# Two types of Export/Import

- Default Export/Import

export default <name of variable>
export component from "path"


# config driven UI
 It mean UI is driven by the config config basically means driven by data for example i have an restaurant for some product i have some offer for a specific city for the same product some city does not have any offer 

 in simple words if our UI is changing on bsed of data we can call it config driven UI

 # Why keys

 Actually react optimizes its render cycle when there are multiple component at the same level what happend these component need to have an unique id all the componnet must be uniquely represented suppose new restaurant card comes in and it comes in at the first place what will happend react will have to insurt new restaurant component at the first place and react will get confused react will rerender all the restaurant cards instead of one beacause react does not know which restaurant card is new so it will rerender all the restaurant cards react does not know at all at what place react need set restaurant card it will not know whether its coming on first place, second place or third place then what does it clean the container completely remove all the card from container and rerrender all the cards 


 when ever a new card comes in beteen any where react does not know which card is new so it had to rerender all the cards 
 if we provide unique id for each card and when new card comes any where react is able to indentify which one is new so it will render just new card not all this is huge optimization and suppose we have 1000 card and react will rerender all the cards on every render it will have a hude performance issues 


 react also does not recommend to use index as key if the order of item change 
 but in wors case scynario if we are not  getting key then we should use index because using index is better than not to use key and best case scynario is ask backend to send id and use id as key 

 # React Hooks
(Normal JS utility functions)

- useState() - Superpowerful State Variables in react
- useEffect()


# Functional component

its a normal JS function which return some piece of JSX

# Class Component

its a component which extend React.Component it has a render method which return some piece of JSX

- Parent Constructor
- Parent Render
    - First Child Constructor
    - First Child Render

    - Second Child Constructor
    - Second Child Render

    <DOM UPDATED - IN SINGLE BATCH>
    - First ComponentDIdMount
    - Second ComponentDIdMount
- Parent ComponentDIdMount