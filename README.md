# Memory Planned

## Technical choices

- I decided not to use NextJS. I figured it was overkill for a project this size.
- I will be using react-router.
- Forms have been handled with react-hook-form, a nice library to help keep the code neat.
- I opted for Material UI as a components lib. This is because MUI handles the a11y for the biggest part, and is easy to theme.
- The authentication is handled by getting the first user from the DB. This results in handling the "security" in the front-end, which is of course a choice made for simplicity and demonstration. In a real application, the security would be handled from the backend.
- The API has been updated to correlate more to my needs.
- - The code and architecture have been refactored slightly.
- - You can now request an user, with its linked memories.
- - Memories belong to a user through user_id.
- - Users and Memories both have an image_url.
- The directory architecture is a "sort-by-type-of-file" structure, which is a classic and simple approach. You could imagine using an atomic structure in a bigger project.
- API calls have been separated into files, called "services", to keep code reusable and easy. These services dish out a promise, to further handle success and errors.
- Seeds have been created for the database. The database is reset every time the API is started, for convenience and demonstration. In a real project, this would not be the case.
- Semantic HTML has been respected, in good part thanks to MUI, to allow for users with disabilities to navigate with ease.
- Axios has been used to communicate with the server, and has been strongly typed through Typescript for easier manipulation.

## Setup

- Because the project was mixing both Modules and CommonJS, thus not being able to start both the API and front app from the same terminal, I decided to get rid of CommonJS and go full-on modules.

## Pages

### Landing Page

The landing page was designed to provide a nice starting point for any user, new or well established.

### Users

#### Index

This displays a listing of all the users. In a real application, this would probably be a filterable search, instead of displaying all the users, which is heavy on the data and rendering.

![image](https://github.com/HibaB00/planned-challenge/assets/53578269/9a58fac3-461c-4f9b-a984-1ec58ff6d1fe)

#### Show

This is the main page of the website, where we display a user's profile. His memories are also displayed. A hiker icon is used to show the user's intent to begin a nice "lane" of memories, while the little trail with the sun is used to show the user's future path.

You can notice three different things when the user is logged in: first, a New Memory button if the user is on its own profile, as well as an edit and delete button

<p align="center">
<image src="https://github.com/HibaB00/planned-challenge/assets/53578269/5e280b33-c748-4156-95a3-f8905d7a04a1">
<image src="https://github.com/HibaB00/planned-challenge/assets/53578269/14aa60cc-97fe-4d5c-809e-fcaf1955028e">
</p>

### Technical Pages

#### 404

The 404 was designed to help the user and redirect them to a nice, safe place in case they got lost.

You're able to sort these memories by regular order (most recent to oldest), or by reverse order (oldest to most recent). This sort is done using CSS, using "column-reverse" instead of handling it through a JS sort. This is much better code-wise, as it does not require to manipulate the array, only the display is updated.

The page has been handled in such a way that it is possible to navigate through the memories by pressing tab, allowing for users with disability to navigate with ease.

![image](https://github.com/HibaB00/planned-challenge/assets/53578269/7d873ca0-b646-4b91-92a3-8c8c3b3242c5)

### Memories

#### Create & Edit

The Memory Creation and Edition have been linked through a single component, as only the API calls differs between those two components. The form have been thought out and designed to respect a11y.

You can notice how the submit is handled through a nice display of errors.

![image](https://github.com/HibaB00/planned-challenge/assets/53578269/cd97d0ea-c18c-437b-9421-6840dee46d05)

## Mobile Responsiveness

The Mobile Responsiveness has been respected, the application is usable through mobile. Even the menu has been adapted to better suit a mobile user, as they make up a good share of the internet.

<p align="center">
<image src="https://github.com/HibaB00/planned-challenge/assets/53578269/9f3e668f-1379-4d2d-8384-714bfa18faea" />
<image src="https://github.com/HibaB00/planned-challenge/assets/53578269/b819b486-321f-46dd-9c5c-7c40af6044b0" />
</p>

## Going further

- In the case of an actual application, you could imagine having some SSR with NextJS, hydrating the data directly into the page, avoiding API calls and loaders.
- To keep things simple, I've chosen to use "image urls" from other CDNs, instead of being able to upload an image. This was done for simplicity and demonstration sake, in an actual application, you could imagine being able to send a file blob, saving the image on the server, and being able to display this very image in the front.
- The authenticated user is currently stored in a React context, which is then served through a custom hook. For a project this size, it is a nice choice. For a bigger project, you could imagine using a state management library, depending on your needs.
- You could imagine being able to see only friend's memories, this would be handled through a many to many table, where each user could add another user as a friend, for example. The security would be handled in the backend, as usual.
- Aliases could have been used to make better imports. This would be done through the package.json, and allows import like import MyComponent from @/components/MyComponent, which makes for cleaner imports and less refactor when moving files around.
- Index files could have been used to only export whichever files we need, this makes for a neatier library for a developer. I thought this was too much for a project this size, and decided I wouldn't make the code more complicated, as I'm looking for a balance.
- Routes could have been exported in their own files, as we would probably have more than that in an actual application. As with other topics, I decided it would be over-the-top in this very scenario.

## Instructions

### Planned coding challenge: Memory lane

**Please avoid initiating pull requests on this repository or forking this repository. To submit your solution, either set up a repository on your own account or forward a zip file to the appropriate contact within our talent team.**

#### Problem definition

After a series of discovery calls we found out a problem that our users are facing. They are having a hard time sharing their memories with friends and family. They are using a combination of social media, messaging apps, and email to share their memories. They are looking for a solution that allows them to store and share their memories in a single place.

As a first iteration for this solution, we want to build a web application that allows users to create a memory lane and share it with friends and family. A memory lane is a collection of events that happened in a chronological order. Each event consists of a title, a description, a timestamp, and at least one image.

#### Deliverables

- Clone this repository and create a new branch with your name. Open a pull request on your own instance of the repository.
- An updated README providing a high level explanation of your implementation.
- **Screenshots or a short video/gif** showing your UI implementation.
- Update the API to accommodate for your technical design. Run the API by using `npm run serve:api`.
- The provided mockup is only for reference and inspiration. Feel free to improve it!

#### FAQ

- **Can I add a framework like Next?** If you have the time, go for it.
- **Is user authentication required?** No, it is not required.
- **Can I use a component library?** Yes, you can use a component library.
- **What will you be looking for?** Good user experience, reusable code, and a well thought out technical design.

#### Inspiration mockup

![Memory lane mockup](./memory_lane.png)
