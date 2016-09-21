# autocompile
require! { fs, path }

requireDir = (loc, ignore, trail=[], cb) ->
  ret = {}
  (fs.readdirSync loc).forEach (file) ->
    
    stats = fs.lstatSync nextLoc = loc + "/" + file
    
    if stats.isDirectory() then ret[file] = requireDir nextLoc, ignore, trail.concat(file), cb
    else switch typeof! ignore
      | "String" =>
        if nextLoc is ignore then return

      | "Array" =>
        if nextLoc in ignore then return

      | "Function" =>
        if ignore(nextLoc) then return

      | "RegExp" =>
        if not ignore.test nextLoc then return

      name = path.basename nextLoc, path.extname nextLoc, ignore, cb
      
      if cb then ret[name] = cb (require nextLoc), trail.concat name
      else ret[name] = require nextLoc
      
  ret
  
module.exports = (root, ignore, cb) ->
  if not ignore then ignore = []
  requireDir (path.dirname root), ignore, [], cb


