//superagent.js
var request = require('superagent');

function superagent(url,callback) {

    request.get(url, function(err, res){
        if (err) throw err;
        console.log(res.text);
        console.log(res);
        callback(res.text);
    });

    
}


module.exports = superagent;

//superagent.test.js
const superagent = require("./superagent");
describe('superagent',function(){
    test('basic path',function(done){
        expect.hasAssertions();
        
        function callback(res){
            console.log(res);
            expect(res).toBe("it works!");
            done();
        };
        superagent('https://gist.githubusercontent.com/reinaldo13/cdbb4d663ba23410a77b/raw/0345267767d50790051951ddc460e2699649de2b/it-works.txt', callback);
    });
})
