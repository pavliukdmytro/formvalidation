# Simple Form validation

### init
``` javascript
 const formValidation =  new FormValidation({
        formSelector: '.def-validation', // forms identifier
        invalidClassName: 'def-invalid', // class for require and invalid input
        onInvalid(e) {
            // callback oninvalid
        },
        onFocusIn(e) {
            // callback onfocusin
        },
    });
 ```

### destroy 
```javascriptcript
formValidation.destroy();
```

### pattern
pattern uses for browser validation

### Example
[example page](https://pavliukdmytro.github.io/formvalidation/)


```html
<link rel="stylesheet" href="FormValidationStyles.css">
<form action="javascript: alert('send')" class="def-validation">
    <input type="text" required placeholder="text">
    <br>
    <label>
        <input type="text" required placeholder="text">
        <span class="def-error">some text</span>
    </label>
    <br>
    <label>
        <input type="text" required placeholder="1234" pattern="1234">
        <span class="def-error">valid number is 1234</span>
    </label>
    <br>
    <button type="submit">submit</button>
</form>

<script src="FormValidation.js"></script>
<script>
    const formValidation =  new FormValidation({
        formSelector: '.def-validation',
        invalidClassName: 'def-invalid',
        onInvalid(e) {
            console.log(e, 'invalid');
            // your code
        },
        onFocusIn(e) {
            console.log(e, 'focus');
            // your code
        },
    });
</script>
```