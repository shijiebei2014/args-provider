## Install

```
$ npm install --save args-provider
```


## Usage

```js
const Context = require('args-provider');

function a() {
  Context.setMulti(this, {'name': 'hello'})
  Context.apply(this, b, 1, 2, 3)
  // b(1,2,3)
}

function b(a, c, d) {
  console.log(a, c, d, Context.get(this, 'name'))
}

Context().apply(a)
```

## Methods


### instance Methods:
  ### get(name)
  ```
  get by name
  ```
  ### set(name, val)
  ```
  set argument by key-val
  ```
  ### apply(fn)
  ```
  bind 'this' that refs to Context to the fn
  ```

### static Methods:
  ### get(ctx, name)
  ```
  the same as get
  ```
  ### set(ctx, name)
  ```
  the same as set
  ```
  ### setMulti(ctx, params)
  ```
  set argument by multi key-val
  ```
  ### apply(ctx, fn)
  ```
  the same as apply
  ```
