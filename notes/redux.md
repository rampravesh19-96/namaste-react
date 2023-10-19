
# Redux tool kit
 - install @reduxjs/toolkit and react-redux
 - Build our store
 - Connect our store to our app
 - Slice (cartSlice)
 - dispatch(action)
 - selector 

# Redux Store

Redux store is a very big JS object with alot of data inside it and it has stored in central global place 

# Slices
It's a small portion of redux store canmn have multiple slice to keep data seperate we can have multiple slices for example

cart data = one slice
loggedInUserInfo = another slice can be
themeSlice = another slice 

will create logincal seperate with different slices  

for changing the cart slice we have to dispatch the action
when click on add btn dispatch an action which  calls the function and that function internally modifies the cart 
the function called by action called reducer

# Important

when click on add btn dispatch an action which calls the reducer function which update the slice of our redux store

Slices will have some data inside it 

for getting data from slice we use selector 
using selector this phinomina is known as subscribing the store 