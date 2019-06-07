var fs = require('fs');
// fs.writeFile('1.txt','aaa',function(err,data){
//     if(err){
//         throw err;
//     }else{
//         console.log('success');
//     }

//     fs.readFile('1.txt',function(err,data){
//         if(err){
//             console.log(err);
//         }else{
//             console.log(data.toString());
//         }
//     })
// })

function writeFile(txt,data){
    return new Promise(function(resolve,reject){
        fs.writeFile(txt,data,function(err,data){
            if(err){
                reject(err);
            }else{
                resolve("success");
            }
        })
    })
    }

function readFile(txt){
    return new Promise(function(resolve,reject){
        fs.readFile(txt,function(err,data){
            if(err){
               reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

writeFile('a.txt','Hello World!').then(function(data){
    console.log("yes");
})

readFile('a.txt').then(function(data){
    console.log(data.toString());
});


