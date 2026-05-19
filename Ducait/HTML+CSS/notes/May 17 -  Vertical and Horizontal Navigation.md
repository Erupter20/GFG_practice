**TO DO**
design amazon's footer


**Vertical and Horizontal Navigation**

ex: **Vertical navigation**

```
<!DOCTYPE html>
<html lang="en">
<head>
<title>Document</title>
<style>
nav div {
border: 2px solid red;
background-color: tomato;
color: white;
padding: 5px;
margin-bottom: 20px;
width: 150px;
}
</style>
</head>
<body>
<nav>
<div>Home</div>
<div>About</div>
<div>Contact</div>
</nav>
</body>
</html>
```

**Horizontal Navigation**

```<!DOCTYPE html>
<html lang="en">
<head>
<title>Document</title>
<style>
nav div {
border: 2px solid red;
background-color: tomato;
color: white;
padding: 5px;
margin-bottom: 20px;
width: 150px;
}
nav{
display: flex;
}
</style>
</head>
<body>
<nav>
<div>Home</div>
<div>About</div>
<div>Contact</div>
</nav>
</body>
</html>
```

**Responsive Navigation**

- Nav bar must change according to the device screen
- it can be defined by using CSS media queries

```
<!doctype html>
<html lang="en">
<head>
<title>Document</title>
<style>
* {
background-color: black;
color: yellow;
}
nav div {
border: 2px solid red;
background-color: tomato;
padding: 5px;
margin-bottom: 20px;
width: 150px;
}
nav {
display: flex;
}
@media screen and (orientation: portrait) {
	nav {
		display: block;
	}
	nav div {
		margin: bottom 30px;
	}
}
</style>
</head>
<body>
<nav>
<div>Home</div>
<div>About</div>
<div>Contact</div>
</nav>
</body>
</html>
```



**Adding Icons to the Page**
