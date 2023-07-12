# web-components-toolbox-steps

Official frontend repository of [steps.ch](https://steps.ch)

## Scripts

👇 Update web-components-toolbox submodule

```
npm run update
```

👇 Run web server with demo pages incl. [json server](#local-json-server)

```
npm run serve
```

👇 Automatic fix code with Standard JS

```
npm run fix
```

## Local JSON Server

> Hint: The JSON server is running with the web server together (see scripts)

Install JSON Server

```
npm install -g json-server
```

Run JSON Server with mock events

```
cd src/es/components/organisms/eventList/
```

```
json-server --watch example-events.json --port 3003
```

Now you are able to fetch the mock events under [http://localhost:3003/events](http://localhost:3003/events).

For more information about JSON Server take a look at [https://github.com/typicode/json-server](https://github.com/typicode/json-server).

## TODO:

- [ ] DateInput.js making it ready for toolbox (analog Button Themes)