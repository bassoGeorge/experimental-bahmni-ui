# Next Gen UI library for Bahmni
This is an experimental repository, trying to build the component library for Bahmni with Carbon Design system

### Notes on local link
To use a local copy of this lib with your project run the following commands

```bash
cd <project-dir>/node_modules/react
yarn link
cd ../react-dom
yarn link

cd <bahmni-next-ui-dir>
yarn link
yarn link react
yarn link react-dom

cd <project-dir>
yarn link bahmni-next-ui
```


### Debug changes