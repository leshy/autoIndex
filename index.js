(function(){
  var fs, path, requireDir, toString$ = {}.toString;
  fs = require('fs');
  path = require('path');
  requireDir = function(loc, ignore, trail, cb){
    var ret;
    trail == null && (trail = []);
    ret = {};
    fs.readdirSync(loc).forEach(function(file){
      var stats, nextLoc, name, val;
      stats = fs.lstatSync(nextLoc = loc + "/" + file);
      if (stats.isDirectory()) {
        return ret[file] = requireDir(nextLoc, ignore, trail.concat(file), cb);
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
        name = path.basename(nextLoc, path.extname(nextLoc, ignore, cb));
        val = require(nextLoc);
        if (cb) {
          val = cb(val, trail.concat(name));
        }
        return ret[name] = val;
      }
    });
    return ret;
  };
  module.exports = function(root, ignore, cb){
    if (!root) {
      root = path.dirname(require.main.filename);
    }
    if (!path.isAbsolute(root)) {
      root = path.resolve(path.dirname(require.main.filename), root);
    }
    if (!ignore) {
      ignore = [];
    }
    return requireDir(root, ignore, [], cb);
  };
  function in$(x, xs){
    var i = -1, l = xs.length >>> 0;
    while (++i < l) if (x === xs[i]) return true;
    return false;
  }
}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xlc2gvY29kaW5nL25vZGVsaWJzL2F1dG9JbmRleC9pbmRleC5scyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztFQUNXLEVBQUEsQ0FBQSxDQUFBLENBQUEsT0FBQSxDQUFBLElBQUE7RUFBSSxJQUFBLENBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxNQUFBO0VBRWYsVUFBVyxDQUFBLENBQUEsQ0FBRSxRQUFBLENBQUEsR0FBQSxFQUFBLE1BQUEsRUFBQSxLQUFBLEVBQUEsRUFBQTs7SUFBYyxrQkFBQSxRQUFNO0lBQy9CLEdBQUksQ0FBQSxDQUFBLENBQUU7SUFDTCxFQUFFLENBQUMsWUFBWSxHQUFBLENBQUksQ0FBQyxRQUFRLFFBQUEsQ0FBQSxJQUFBOztNQUMzQixLQUFNLENBQUEsQ0FBQSxDQUFFLEVBQUUsQ0FBQyxVQUFVLE9BQVEsQ0FBQSxDQUFBLENBQUUsR0FBSSxDQUFBLENBQUEsQ0FBSyxHQUFDLENBQUEsQ0FBQSxDQUFFLElBQXRCO01BRXJCLElBQUcsS0FBSyxDQUFDLFdBQVQsQ0FBb0IsQ0FBcEI7ZUFBNEIsR0FBRyxDQUFDLElBQUQsQ0FBTyxDQUFBLENBQUEsQ0FBRSxXQUFXLFNBQVMsUUFBUSxLQUFLLENBQUMsT0FBTyxJQUFELEdBQVEsRUFBckM7T0FDbkQ7UUFDRSxRQUFPLFNBQUEsTUFBUSxNQUFSLGNBQVA7QUFBQSxRQUVZLEtBQUEsUUFBQTtBQUFBLFVBQ1IsSUFBRyxPQUFRLENBQUEsR0FBQSxDQUFHLE1BQWQ7WUFBMEIsTUFBQTs7O1FBRW5CLEtBQUEsT0FBQTtBQUFBLFVBQ1AsSUFBRyxHQUFBLENBQUEsT0FBQSxFQUFXLE1BQVgsQ0FBSDtZQUEwQixNQUFBOzs7UUFFaEIsS0FBQSxVQUFBO0FBQUEsVUFDVixJQUFHLE1BQUgsQ0FBVSxPQUFELENBQVQ7WUFBd0IsTUFBQTs7O1FBRWhCLEtBQUEsUUFBQTtBQUFBLFVBQ1IsSUFBRyxDQUFJLE1BQU0sQ0FBQyxJQUFYLENBQWdCLE9BQUEsQ0FBbkI7WUFBZ0MsTUFBQTs7O1FBRWxDLElBQUssQ0FBQSxDQUFBLENBQUUsSUFBSSxDQUFDLFNBQVMsU0FBUyxJQUFJLENBQUMsUUFBUSxTQUFTLFFBQVEsRUFBakIsQ0FBdEI7UUFFckIsR0FBSSxDQUFBLENBQUEsQ0FBRSxRQUFRLE9BQUE7UUFDZCxJQUFHLEVBQUg7VUFBVyxHQUFJLENBQUEsQ0FBQSxDQUFFLEdBQUcsS0FBSyxLQUFLLENBQUMsT0FBTyxJQUFBLENBQWxCOztlQUVwQixHQUFHLENBQUUsSUFBRixDQUFTLENBQUEsQ0FBQSxDQUFFOztLQXhCUztXQTRCN0I7O0VBRUYsTUFBTSxDQUFDLE9BQVEsQ0FBQSxDQUFBLENBQUUsUUFBQSxDQUFBLElBQUEsRUFBQSxNQUFBLEVBQUEsRUFBQTtJQUNmLElBQUcsQ0FBSSxJQUFQO01BQWlCLElBQUssQ0FBQSxDQUFBLENBQUUsSUFBSSxDQUFDLFFBQVEsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFiOztJQUNyQyxJQUFHLENBQUksSUFBSSxDQUFDLFVBQVQsQ0FBb0IsSUFBRCxDQUF0QjtNQUFrQyxJQUFLLENBQUEsQ0FBQSxDQUFFLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxRQUFRLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBZCxHQUF5QixJQUFyQzs7SUFFdEQsSUFBRyxDQUFJLE1BQVA7TUFBbUIsTUFBTyxDQUFBLENBQUEsQ0FBRTs7V0FDNUIsV0FBVyxNQUFNLFFBQVEsSUFBSSxFQUFsQiIsInNvdXJjZXNDb250ZW50IjpbIiMgYXV0b2NvbXBpbGVcbnJlcXVpcmUhIHsgZnMsIHBhdGggfVxuXG5yZXF1aXJlRGlyID0gKGxvYywgaWdub3JlLCB0cmFpbD1bXSwgY2IpIC0+XG4gIHJldCA9IHt9XG4gIChmcy5yZWFkZGlyU3luYyBsb2MpLmZvckVhY2ggKGZpbGUpIC0+XG4gICAgc3RhdHMgPSBmcy5sc3RhdFN5bmMgbmV4dExvYyA9IGxvYyArIFwiL1wiICsgZmlsZVxuICAgIFxuICAgIGlmIHN0YXRzLmlzRGlyZWN0b3J5KCkgdGhlbiByZXRbZmlsZV0gPSByZXF1aXJlRGlyIG5leHRMb2MsIGlnbm9yZSwgdHJhaWwuY29uY2F0KGZpbGUpLCBjYlxuICAgIGVsc2VcbiAgICAgIHN3aXRjaCB0eXBlb2YhIGlnbm9yZVxuICAgICAgXG4gICAgICAgIHwgXCJTdHJpbmdcIiA9PlxuICAgICAgICAgIGlmIG5leHRMb2MgaXMgaWdub3JlIHRoZW4gcmV0dXJuXG5cbiAgICAgICAgfCBcIkFycmF5XCIgPT5cbiAgICAgICAgICBpZiBuZXh0TG9jIGluIGlnbm9yZSB0aGVuIHJldHVyblxuXG4gICAgICAgIHwgXCJGdW5jdGlvblwiID0+XG4gICAgICAgICAgaWYgaWdub3JlKG5leHRMb2MpIHRoZW4gcmV0dXJuXG5cbiAgICAgICAgfCBcIlJlZ0V4cFwiID0+XG4gICAgICAgICAgaWYgbm90IGlnbm9yZS50ZXN0IG5leHRMb2MgdGhlbiByZXR1cm5cblxuICAgICAgICBuYW1lID0gcGF0aC5iYXNlbmFtZSBuZXh0TG9jLCBwYXRoLmV4dG5hbWUgbmV4dExvYywgaWdub3JlLCBjYlxuICAgICAgICBcbiAgICAgICAgdmFsID0gcmVxdWlyZSBuZXh0TG9jXG4gICAgICAgIGlmIGNiIHRoZW4gdmFsID0gY2IgdmFsLCB0cmFpbC5jb25jYXQgbmFtZVxuXG4gICAgICAgIHJldFsgbmFtZSBdID0gdmFsXG4jICAgICAgICBpZiBuYW1lIGlzICdpbmRleCcgdGhlbiByZXQgPDw8IHZhbFxuIyAgICAgICAgZWxzZSByZXRbbmFtZV0gPSB2YWxcbiAgICAgICAgXG4gIHJldFxuICBcbm1vZHVsZS5leHBvcnRzID0gKHJvb3QsIGlnbm9yZSwgY2IpIC0+XG4gIGlmIG5vdCByb290IHRoZW4gcm9vdCA9IHBhdGguZGlybmFtZSByZXF1aXJlLm1haW4uZmlsZW5hbWVcbiAgaWYgbm90IHBhdGguaXNBYnNvbHV0ZShyb290KSB0aGVuIHJvb3QgPSBwYXRoLnJlc29sdmUgcGF0aC5kaXJuYW1lKHJlcXVpcmUubWFpbi5maWxlbmFtZSksIHJvb3RcbiAgICAgIFxuICBpZiBub3QgaWdub3JlIHRoZW4gaWdub3JlID0gW11cbiAgcmVxdWlyZURpciByb290LCBpZ25vcmUsIFtdLCBjYlxuXG5cbiJdfQ==
