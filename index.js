function Context() {
  var self = this
  var isNew = this instanceof Context
  if (!isNew) {
      self = new Context()
  }
  return self
}

Context.prototype.set = function(key, val) {
  if (!this.data) {
    this.data = Object.create(null)
  }
  this.data[key] = val
}

Context.prototype.get = function(key) {
  return this.data[key]
}

Context.prototype.apply = function(fn) {
  var self = this
  if (typeof fn !== 'function') {
    return
  }
  return fn.apply(self, Array.prototype.slice.call(arguments, 1))
}

/**
 * inject(get) arguments
 * @param  {Context} ctx
 * @param  {String} key
 * @return {Any}
 */
Context.get = function(ctx, key) {
  var ret;
  if (_isContext(ctx)) {
    ret = ctx.get(key)
  }
  return ret
}
/**
 * register single argument
 * @param  {Context} ctx
 * @param  {String} key
 * @param  {Any} value
 * @return {Void}
 */
Context.set = function(ctx, key, value) {
  if (_isContext(ctx)) {
    ctx.set(key, value)
  }
}
/**
 * register arguments
 * @param  {Context} ctx
 * @param  {Object} params
 * @return {Void}
 */
Context.setMulti = function(ctx, params) {
  if (_isContext(ctx)) {
    if (Object.prototype.toString.call(params) === "[object Object]") {
      for (var key in params) {
        if (params.hasOwnProperty(key)) {
          Context.set(ctx, key, params[key])
        }
      }
    }
  }
}
/**
 * exec
 * @param  {Context}   ctx
 * @param  {Function} fn
 * @return {Any}
 */
Context.apply = function(ctx, fn) {
  if (typeof fn !== 'function') {
    return
  }
  if (_isContext(ctx)) {
    return fn.apply(ctx, Array.prototype.slice.call(arguments, 2))
  }
}

function _isContext(ctx) {
  return ctx instanceof Context
}

module.exports = Context
