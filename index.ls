# autocompile
require! { fs, path }

requireDir = (loc, ignore, trail=[], cb) ->
  ret = {}
  (fs.readdirSync loc).forEach (file) ->
    stats = fs.lstatSync nextLoc = loc + "/" + file
    
    if stats.isDirectory() then ret[file] = requireDir nextLoc, ignore, trail.concat(file), cb
    else
      switch typeof! ignore
      
        | "String" =>
          if nextLoc is ignore then return

        | "Array" =>
          if nextLoc in ignore then return

        | "Function" =>
          if ignore(nextLoc) then return

        | "RegExp" =>
          if not ignore.test nextLoc then return

        name = path.basename nextLoc, path.extname nextLoc, ignore, cb
        
        val = require nextLoc
        if cb then val = cb val, trail.concat name

        ret[ name ] = val
#        if name is 'index' then ret <<< val
#        else ret[name] = val
        
  ret
  
module.exports = (root, opts={}, cb) ->
  { ignore } = opts
  if not root then root = path.dirname require.main.filename
  if not path.isAbsolute(root) then root = path.resolve path.dirname(require.main.filename), root
      
  if not ignore then ignore = []
  requireDir root, ignore, [], cb


