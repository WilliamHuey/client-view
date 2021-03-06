
/**
 * Expose `context`
 */

exports = module.exports = context;

/**
 * Expose `collection`.
 */

exports.collection = [];

/**
 * Expose `Context`.
 */

exports.Context = Context;

/**
 * Create or retrieve an existing context.
 *
 * @param {String} name
 */

function context(name, parent, elem) {
  if (!name) throw new Error("You need to specify a name within a context.");

  if (exports.collection[name]) return exports.collection[name];

  return exports.collection[name] = new Context({
      name: name
    , parent: parent
    , elem: elem
  });
}

/**
 * Instantiate a new `Context`.
 *
 * @param {Object} options
 */

function Context(options) {
  this.name = options.name;

  if (options.parent) {
    this.parent = context(options.parent);
  }

  this.elem = options.elem || null;

  this.children = {};
  this.maps = [];
  this.scopes = [];
}

Context.prototype.addMap = function(map){
  this.maps.push(this.maps[map.from.toString()] = map );
  if (!this.scopes[map.from.toString()]) {
    this.scopes.push(this.scopes[map.from.toString()] = map.from);
  }
};