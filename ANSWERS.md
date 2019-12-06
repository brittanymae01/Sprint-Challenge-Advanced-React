- [x] Why would you use class component over function components (removing hooks from the question)?

    If you get a job somewhere that uses React a lot of projects will still have class components in them, and we need to be prepared to work with classes when we see them. 

- [x] Name three lifecycle methods and their purposes.

    componentDidMount()
componentDidMount() is called as soon as the component is mounted and ready. This is a good place to initiate API calls and setState().

componentDidUpdate()
This lifecycle method is invoked as soon as the updating happens. The most common use case for the componentDidUpdate() method is updating the DOM in response to prop or state changes.


componentWillUnmount()
As the name suggests this lifecycle method is called just before the component is unmounted and destroyed. If there are any cleanup actions that you would need to do, this would be the right spot.


- [x] What is the purpose of a custom hook?

Building your own Hooks lets you extract component logic into reusable functions.

- [x] Why is it important to test our apps?

Automated testing minimizes the risk of bugs finding their way into production code.

A more detailed list:
* Surfaces bugs faster.
* Reduces the risk of regressions.
* Allows us to trust the code.
* Makes us think about the edge cases.
* Acts as a safety net when making changes or refactoring.
* Acts as documentation for the code.
* Encourages us to write more testable (better!) code.