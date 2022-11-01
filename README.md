## Description
The Calendar-app provides user basic calendar and allows to create custom events.
Project was created for learning purposes to examine Redux, Redux Toolkit and RTK Query features.

Implemented features:
- Navigation over date.
- Interaction with the JSON server: create/delete events.

## Technology stack:
- TypeScript
- React
- SCSS
- Redux/Redux-toolkit


## Build
To build and run this application locally, you'll need the latest versions of Git installed on your computer and JSON serever.
You can install JSON Server by using comand: `npm install -g json-server`.
From your command line:
1. Clone this repository local-server branch
```
git clone -b local-server https://github.com/PushkarevAR/calendar.git
```
2. Go into the repository & install all deps
```
cd calendar
yarn install
```
3. Run server
```
json-server --watch db.json --port 5000
```
4. Open new terminal and run client
```
cd calendar
yarn start
```
Or use GitHub Pages [deploy](https://pushkarevar.github.io/calendar/) with fake online REST server, as it is fake, changes are also faked and weren't persisted.

## Showcase
<img src="https://user-images.githubusercontent.com/85485508/199170124-526b5a8a-d2d4-47eb-8dd7-67c96c043210.png" alt="calendar-app-showcase"/>
