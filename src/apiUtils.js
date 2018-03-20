let baseUrl = "http://localhost:11111/"
export const doRequest =  (methodType,path,data,callback) =>{
    var headers = new Headers({
        'Content-Type': 'application/json'
    })
    var mode = 'cors'
    fetch(baseUrl+path, {method:methodType,mode,headers,body:JSON.stringify(data)})
    .then((response) => parseJSON(response)).then(callback)
}
export const formRequest =  (methodType,path,data,callback) =>{
    var mode = 'cors'
    fetch(baseUrl+path, {method:methodType,mode,body:data})
    .then(callback)
}
function parseJSON(response) {
    return response.json();
}