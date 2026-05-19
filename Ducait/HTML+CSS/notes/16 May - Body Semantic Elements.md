**Body Semantic Elements**

-  Upto HTML4 body section was designed by using tables
- Tables lead to a situation called "Kiss of death"
- Tables aren't SEO friendly
- HTML5 introduced  new elements into body section to design a layout that can be seo friendly
- these new elements of HTML5 are:
	1. aside
	2. article
	3. dialog
	4. figure
	5. figcaption
	6. header
	7. footer
	8. section
	9. main
	10. nav
	11. menu
	12. div
	13. span
  All are containers
		<aside> content </aside/>
	div defines blocked content
	 span defines inline content
 Usage:
 1. Add  style container in the head section

<head>

	1. ```
	   <head>
<style>
</style>
</head>
	   ```
	2. you can add styles into styles container
         ```
         selector{
         attribute: value
         attribute : value
         }
         ```
    NOTE: Selector defines where you want to apply effects, along which the element is ti be applied on

STYLE ATTRIBUTES
============================

```
background-color  : set-background-color
color : set text-color
text-align : sets text alignment to left, center, right , justify
border: set border [size, style, color]
		border : 2px solid|dotted|dashed red
		
margin-left
margin-right
margin-top
margin-bottom
margin : all directions

paddding-left
padding-right
padding-top
padding-bottom
padding : all directions


border-radius

height : height of element
width : width of element

```

BOX Model in CSS
![[Pasted image 20260516121010.png]]


```
display : grid
gird-template-columnd : hpw many columns and their size. Max 12 columns
```
NOTE: Column width can be in pixels or fractions

pixels : max 1200px  fixed size
fr : max 12 , adjusts according to browser

