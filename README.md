## reapp-platform

This library is, for now, the "glue" library for a few different pieces of reapp.
Ideally this library could eventually be phased out altogether into smaller
ones, or moved into the other reapp pieces, respectively.

When you require this library it does two things:

- Enables touch events for React (this will be not necessary by React 1.0)
- Includes [reapp-object-assign](https://github.com/reapp/reapp-object-assign)
which gives you a polyfill to use Object.assign() in your app.

It also exports an object with:

- Env: { CLIENT: (true/false), SERVER: (true/false) }
- Helpers:
  - storePromise: pass in a store, and a function that takes in the store data and returns true or false, will resolve the promise when the condition returns true.
- Mixins:
  - RoutedViewListMixin: provides a variety of helpers for use with react-router and ViewLists
  - storeRefreshMixin: pass in actions as arguments, will forceRefresh a React component when those actions happen.
