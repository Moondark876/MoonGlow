<!-- if_statements.md -->

# If Statements in MoonGlow 

In this section, we will learn how to use if statements in MoonGlow.
MoonGlow has if statements, which are used to execute a block of code if a certain condition is met. The if statement is written like this:

```MoonGlow
if (-/condition/-) -> {
    -- Code to execute if condition is met
}
```

If statements in MoonGlow are can be continue with the use of the `else if` and `else` operators. The `else if` operator is used to check another condition if a condition is not met. The `else` operator is executed when all conditions are not met. See example below:

```MoonGlow
if (-/condition/-) -> {
    -- Code to execute if condition is met
} else if (-/condition/-) -> {
    -- Code to execute if condition is met
} else {
    -- Code to execute if condition is not met
}
```

If statements in MoonGlow support multiple conditions as well, with the usage of the `and` and `or` operators. The `and` operator is used to check if all conditions are met. The `or` operator is used to check if at least one condition is met. See example below:

```MoonGlow
if (-/condition1/- and -/condition2/-) -> {
    -- Code to execute if all conditions are met
} else if (-/condition1/- or -/condition2/-) -> {
    -- Code to execute if condition is met
} else {
    -- Code to execute if condition is not met
}
```
