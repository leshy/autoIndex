// Generated by LiveScript 1.4.0
(function(){
  var fs, path, requireDir;
  fs = require('fs');
  path = require('path');
  requireDir = function(loc, ignore){
    var ret;
    ret = {};
    fs.readdirSync(loc).forEach(function(file){
      var stats, nextLoc, name;
      stats = fs.lstatSync(nextLoc = loc + "/" + file);
      if (stats.isDirectory()) {
        return ret[file] = requireDir(nextLoc);
      } else {
        if (nextLoc === ignore) {
          return;
        }
        name = path.basename(nextLoc, path.extname(nextLoc, ignore));
        return ret[name] = require(nextLoc);
      }
    });
    return ret;
  };
  module.exports = function(root){
    return requireDir(path.dirname(root), root);
  };
}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xlc2gvY29kaW5nL25vZGVsaWJzL2F1dG9pbmRleC9pbmRleC5scyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7RUFHRSxFQUFBLENBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxJQUFBO0VBQ0EsSUFBQSxDQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsTUFBQTtFQUlGLFVBQVcsQ0FBQSxDQUFBLENBQUUsUUFBQSxDQUFBLEdBQUEsRUFBQSxNQUFBOztJQUNYLEdBQUksQ0FBQSxDQUFBLENBQUU7SUFDTCxFQUFFLENBQUMsWUFBWSxHQUFBLENBQUksQ0FBQyxRQUFRLFFBQUEsQ0FBQSxJQUFBOztNQUUzQixLQUFNLENBQUEsQ0FBQSxDQUFFLEVBQUUsQ0FBQyxVQUFVLE9BQVEsQ0FBQSxDQUFBLENBQUUsR0FBSSxDQUFBLENBQUEsQ0FBSyxHQUFDLENBQUEsQ0FBQSxDQUFFLElBQXRCO01BQ3JCLElBQUcsS0FBSyxDQUFDLFdBQVQsQ0FBb0IsQ0FBcEI7ZUFDRSxHQUFHLENBQUMsSUFBRCxDQUFPLENBQUEsQ0FBQSxDQUFFLFdBQVcsT0FBQTtPQUN6QjtRQUNFLElBQUcsT0FBUSxDQUFBLEdBQUEsQ0FBRyxNQUFkO1VBQTBCLE1BQUE7O1FBRTFCLElBQUssQ0FBQSxDQUFBLENBQUUsSUFBSSxDQUFDLFNBQVMsU0FBUyxJQUFJLENBQUMsUUFBUSxTQUFTLE1BQVQsQ0FBdEI7ZUFDckIsR0FBRyxDQUFDLElBQUQsQ0FBTyxDQUFBLENBQUEsQ0FBRSxRQUFRLE9BQUE7O0tBVEs7V0FXN0I7O0VBR0YsTUFBTSxDQUFDLE9BQVEsQ0FBQSxDQUFBLENBQUUsUUFBQSxDQUFBLElBQUE7V0FBVSxXQUFZLElBQUksQ0FBQyxRQUFRLElBQUEsR0FBTyxJQUFyQiIsInNvdXJjZXNDb250ZW50IjpbIiMgYXV0b2NvbXBpbGVcblxucmVxdWlyZSEge1xuICBmc1xuICBwYXRoXG59XG5cblxucmVxdWlyZURpciA9IChsb2MsIGlnbm9yZSkgLT5cbiAgcmV0ID0ge31cbiAgKGZzLnJlYWRkaXJTeW5jIGxvYykuZm9yRWFjaCAoZmlsZSkgLT5cbiAgICBcbiAgICBzdGF0cyA9IGZzLmxzdGF0U3luYyBuZXh0TG9jID0gbG9jICsgXCIvXCIgKyBmaWxlXG4gICAgaWYgc3RhdHMuaXNEaXJlY3RvcnkoKVxuICAgICAgcmV0W2ZpbGVdID0gcmVxdWlyZURpciBuZXh0TG9jXG4gICAgZWxzZVxuICAgICAgaWYgbmV4dExvYyBpcyBpZ25vcmUgdGhlbiByZXR1cm5cblxuICAgICAgbmFtZSA9IHBhdGguYmFzZW5hbWUgbmV4dExvYywgcGF0aC5leHRuYW1lIG5leHRMb2MsIGlnbm9yZVxuICAgICAgcmV0W25hbWVdID0gcmVxdWlyZSBuZXh0TG9jXG4gICAgICBcbiAgcmV0XG4gIFxuXG5tb2R1bGUuZXhwb3J0cyA9IChyb290KSAtPiByZXF1aXJlRGlyIChwYXRoLmRpcm5hbWUgcm9vdCksIHJvb3RcblxuXG5cbiJdfQ==
