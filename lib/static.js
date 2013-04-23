
/**
 * Create a new child view.
 *
 * @param {String} name View name
 */

exports.child = function(name){
  if (this.children[name]) return this;
  this.children.push(this.children[name] = view(name));
  return this;
};

/**
 * Return true if the view has any child views
 *
 * @return {Boolean}
 */

exports.hasChildren = function(){
  return this.children.length;
}

/**
 * Set or get the current state
 *
 * @param {String} state
 * @return {View}
 */

exports._state = function(state){
  this.state = state;
  return this;
};

/**
 * Swap a view with another view.
 *
 * @param {String} from View to swap
 * @param {String} to   View to replace with.
 */

exports.swap = function(from, to){
  this.children[from] = view(to);
  return this;
};