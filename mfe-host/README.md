- Add package into devDependencies

```
npm i webpack -D
npm i @craco/craco -D
```

- Add cli into scripts package.json

```
npm pkg set scripts.start="set PORT=3000 && craco start"
npm pkg set scripts.build="craco build"
npm pkg set scripts.test="craco test"
```