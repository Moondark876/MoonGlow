<!-- comments.md -->

# Comments in MoonGlow

In this section, we will learn how to use comments in MoonGlow.
MoonGlow has comments, which are used to comment out code. Comments are written like this:

```MoonGlow
-- This is a comment
```

Comments are not executed. They are simply ignored. Comments in MoonGlow start at the `--` symbol, and are terminated at the end of the line. See example below:

```MoonGlow
var shine = "";
-- var shine = "moon";
shine = shine + "glow";
var moon = 0;
-- var moon = 5;
moon = moon + 5;
```

MoonGlow also supports multiline comments. Multiline comments are written like this (syntax inspired by [Upsidedly](https://github.com/Upsidedly) on GitHub):

```MoonGlow
-/
This is a comment.
I am commenting.
I am a commentor. 
/-
```
