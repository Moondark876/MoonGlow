<!-- for_loops.md -->

# For loops in MoonGlow

For loops in MoonGlow are the same as regular c-style for loops, with the same syntax, but with added arrows for style. See example below:

```
for (var i = 1; i == 10; i = i + 2) -> {
    -- body here
}
```

The variable declared in the scope of the declaration is also terminated upon the termination of the for loop. The three fields can also optionally be left unfilled, to initiate a while loop-like sequence:

```
for (;;) -> {
    -- body here
}
```

There is virtually no difference between using the latter and using a while loop. 
