Ionian Material UI Intro
===

- ```npm install @material-ui/core```

- newschool TextField

- import TextField from mui core

```
import { TextField } from '@material-ui/core';
```

- added element to DOM

```
  <TextField placeholder="newschool" onChange={ (event)=>getName(event)} />
```

- new school button (add Button to import)

```
 <Button>newschool</Button>
```

- news chool select (add Select & MenuItem to import)

```
      <Select
        value={ size }
        onChange={ getSize }
      >
        <MenuItem value="tiny">Tiny (smaller than pea)</MenuItem>
        <MenuItem value="small">Small (less than a cup)</MenuItem>
        <MenuItem value="medium">Med (fits on a kitchen table)</MenuItem>
        <MenuItem value="large">Large (can't get it thru a door)</MenuItem>
      </Select>
```

in public/index.html, add robot font to header:

```
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
```