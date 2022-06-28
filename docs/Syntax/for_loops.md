<!-- for_loops.md -->

# For loops in MoonGlow

In this section, we will learn how to use for loops in MoonGlow.
MoonGlow has a for loop, which is a loop that executes a block of code a number of times. The variable declared in the scope of the declaration is also terminated upon the termination of the for loop. The for loop is written like this:

```MoonGlow
for (var i = 0; i < 10; i = i + 1) ->{
    -- Code to execute 10 times
}
```

For loops in MoonGlow are very similar to the for loops in C/C++. The only difference is that MoonGlow uses the `(-/condition/-) ->` syntax instead of the `(-/condition/-)` syntax in those languages.

A for loop can be used in the same way as a while loop in MoonGlow. To achieve this effect, leave all of the `(condition)` syntaxes empty. See example below:

```MoonGlow
for (;;) -> {
    -- Code to execute infinitely
}
``` 
