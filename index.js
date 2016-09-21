(function(){
  var fs, path, requireDir, toString$ = {}.toString;
  fs = require('fs');
  path = require('path');
  requireDir = function(loc, ignore, trail, cb){
    var ret;
    trail == null && (trail = []);
    ret = {};
    fs.readdirSync(loc).forEach(function(file){
      var stats, nextLoc, name;
      stats = fs.lstatSync(nextLoc = loc + "/" + file);
      if (stats.isDirectory()) {
        ret[file] = requireDir(nextLoc, ignore, trail.concat(file), cb);
      } else {
        switch (toString$.call(ignore).slice(8, -1)) {
        case "String":
          if (nextLoc === ignore) {
            return;
          }
          break;
        case "Array":
          if (in$(nextLoc, ignore)) {
            return;
          }
          break;
        case "Function":
          if (ignore(nextLoc)) {
            return;
          }
          break;
        case "RegExp":
          if (!ignore.test(nextLoc)) {
            return;
          }
        }
      }
      name = path.basename(nextLoc, path.extname(nextLoc, ignore, cb));
      if (cb) {
        return ret[name] = cb(require(nextLoc), trail.concat(name));
      } else {
        return ret[name] = require(nextLoc);
      }
    });
    return ret;
  };
  module.exports = function(root, ignore, cb){
    if (!ignore) {
      ignore = [];
    }
    return requireDir(path.dirname(root), ignore, [], cb);
  };
  function in$(x, xs){
    var i = -1, l = xs.length >>> 0;
    while (++i < l) if (x === xs[i]) return true;
    return false;
  }
}).call(this);
