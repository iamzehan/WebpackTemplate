# Configure

## `1. Install packages 📥`

```npm:
npm install
```

## `2. Build Webpack`

```
npm run build
```

The build will live in the `📁./dist`

## `3. Run development server`

```
npm run dev
```

## `4. Run deployment`
(This one is configured to `gh pages`)

`1. Create new branch > gh-pages`
```bash:
git checkout -b gh-pages
```

`2. Only add the dist folder contents`

```bash:
git add dist -f
```

`3. Deploy > $ git subtree push --prefix=./dist origin gh-pages`

```bash:
npm run deploy
```
<center>
    <h3> 🛠️ Technologies Used </h3>
    <p align="middle">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="40" height="40"/>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" width="40" height="40"/>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width="40" height="40"/>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" alt="Webpack" width="40" height="40"/>
    </p>
</center>