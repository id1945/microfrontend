- Add package into devDependencies

```
npm i @angular-architects/module-federation -D
npm i ngx-build-plus -D
```

- Add cli into scripts package.json

```
npm pkg set scripts.run:all="node node_modules/@angular-architects/module-federation/src/server/mf-dev-server.js"
```