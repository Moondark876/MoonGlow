<!-- variable.md -->

# Variables in MoonGlow

In this section, we will learn how to use variables in MoonGlow.
Variables in MoonGlow are used to store values. Variables are declared with the `var` keyword.

```MoonGlow
var my_variable = value;
```

The `my_variable` is the name of the variable. The `=` symbol is used to assign a value to the variable. The `value` is the value that the variable will store. Variables in MoonGlow are defined dynamically. This means that the variable's typing is subject to change. Variables in MoonGlow are defined with the `var` keyword. See example below:

```MoonGlow
var shine = "moon";
```

When reassigning a variable, the `var` keyword is removed and a new value is assigned.

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
