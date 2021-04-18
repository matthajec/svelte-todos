# Svelte Todos
A simple todo app build with Svelte using Firebase as a backend. The user can log in with their Google account and have a todo list where all the data is synced to the cloud in real time.

## Built With
* Svelte
* Firebase

## Challenges
* Securing the database. To do this I created 2 functions in the Firebase Security Rules. The first one checks if a document that is being modified, read, or deleted is owned by the authenticated user. The next one checks if an incoming document is owned by the user and runs on create requests.

* Triggering removal and status toggling on todo items. When the user pressed the status toggle or delete button on a ```TodoItem```, I needed to send that request up to ```Todos```, where the firebase logic was handled. To do this I used the custom event system in Svelte to dispatch events to be handled by a higher component. Here's the code that dispatches a delete event in ```TodoItem```:
  ```javascript
  // remove function called on delete button press
  function remove() {
    dispatch("remove", { id });
  }
  ```
  Here's the code to catch this event:
  ```javascript
    <TodoItem on:remove={/* handle deleting an item from the db */} /* other props here*/ />
  ```