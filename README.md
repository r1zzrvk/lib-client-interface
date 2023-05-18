#  Getting started :wave:
Web application that implements https://nextjs-library-app.vercel.app/

# Development :computer:
`npm run dev` - to start application in development mode. App will be available at http://localhost:3000. 
- Atomic file system is mandatory. Each component is in its own folder along with its styles, tests and other files intended for it.

`npm run lint` - to start linting and simple fixing.

`npm run type-check` - to start looking for type errors

###  Git
When creating a commit, pay attention to its structure. For linting use [commitlint](https://github.com/conventional-changelog/commitlint). But for convenience I have placed rules here.

In general the pattern mostly looks like this:
```sh
commitType(scope?): subject  #scope is optional; multiple scopes are supported (current delimiter options: "/", "\" and ",")
```

Real world examples can look like this:

```
chore: run tests on travis ci
```

```
fix(server): send cors headers
```

```
feat(blog): add comment section
```
Common types can be:
- build
- chore
- ci
- docs
- feat
- fix
- perf
- refactor
- revert
- style
- test

> Before committing, I recommend running a linter because if there are errors when pushing, it will be rejected! `npm run lint` and `npm run type-check` will start automatically with `git push`.

####  Branches rules :heavy_exclamation_mark:

|                | MR           | Push       | Branching|
|----------------|--------------------|--------------|---------|
|master 				 |:x: can not merge by request|:x: can not push           | :heavy_check_mark: can branch from|
|develop         |:heavy_check_mark:	can merge by request   |:x: can not push         | :heavy_check_mark: can branch from|
|feature/bugfix  | :heavy_check_mark: can merge by request and without| :heavy_check_mark: can push | :heavy_check_mark: can branch from|

##  Google documentation

```
https://www.googleapis.com/your_request
```
 - [`Authorization`](https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow?hl=ru#authorization-errors-origin-mismatch)

 - [`Books`](https://developers.google.com/books/docs/v1/getting_started)

##  Figma :art:

Disign and ui-kit based on these [layouts](https://www.figma.com/file/3KUeji625hyCsGa52g8MIB/Cosssy-%5BFurniture-store%5D-(Community)?type=design&node-id=451-965). But for some pages and components I had to create it myself :)



