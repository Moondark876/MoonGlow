<!-- variable.md -->

<head>
<style>
    .code-str { color:#090; }
    .code-elem{ color: #F90; }
    .code-comment { color:#999; }
    .code-keyword { color: #00F; }
</style>
<script src="../scripts/codeblocks.js">
</script>
</head>

<body>
# Variables in MoonGlow

Variables in MoonGlow are defined dynamically. This means that the variable's typing is subject to change. Variables in MoonGlow are defined with the `var` keyword. See example below:

```MoonGlow
var shine = "moon";
```

When redefining variables in MoonGlow, the `var` keyword is removed. Here is another example, showcasing the change of the variable from string to number:

```MoonGlow
var shine = "moon";
shine = 5;
```

Variables which are numbers or strings can be incremented by the different operators. In MoonGlow, the only available string operator at this time is the concatination operator, `+`. All other operators are available for numerical values. Below is the final example:

```MoonGlow
var shine = "moon";
shine = shine + "glow";

var moon = 5;
moon = moon + 5;
```
</body>
