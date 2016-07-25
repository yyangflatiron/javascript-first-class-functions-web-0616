function receivesAFunction(callback){
  return callback()
}


function returnsANamedFunction(name){
  function name(){};
  return name
}

function returnsAnAnonymousFunction(){
  return ()=>{}
}
