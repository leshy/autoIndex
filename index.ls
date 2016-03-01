# autocompile

require! {
  fs
  path
}


requireDir = (loc, ignore) ->
  ret = {}
  (fs.readdirSync loc).forEach (file) ->
    
    stats = fs.lstatSync nextLoc = loc + "/" + file
    if stats.isDirectory()
      ret[file] = requireDir nextLoc
    else
      if nextLoc is ignore then return

      name = path.basename nextLoc, path.extname nextLoc, ignore
      ret[name] = require nextLoc
      
  ret
  

module.exports = (root) -> requireDir (path.dirname root), root



