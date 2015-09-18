var request = require('supertest'),
    should = require('should-http');
    
describe('student',function(){ //desc
    describe('find()',function(){ //nested desc
      var url="localhost:5000"; //var dec
      it("should retrieve all student record",function(done){
         request(url)
          .get("/students") //function
          .end(function(err,res){ //another if? func
            if(err)throw err;
            res.should.have.status(200); //ok status
            res.body.should.be.an.instanceOf(Array); //test if res.body is instance of an array 
            done();
         });
          //response of 200 is array of obj.
      });
     
    });
    
    describe('findOne()',function(){ //nested desc
      var url="localhost:5000"; //var dec
      it("should retrieve an existing student record",function(done){
         request(url)
          .get("/students"+"/0000-00000") //function
          .end(function(err,res){ //another if? func
            if(err)throw err;
            res.should.have.status(200); //ok status
            res.body.should.be.an.instanceOf(Object); //test if res.body is instance of an array 
            done();
         });
          //response of 200 is array of obj.
      });
    });
    
    describe('Insert()',function(){ //nested desc
      var url="localhost:5000"; //var dec
      it("should return newly created record",function(done){
          .post("/students") //function
          .send({'studNo':'2015-12345','name':'Maria','bdate':'1997-11-12'})
          .end(function(err,res){ //another if? func
            if(err)throw err;
            res.should.have.status(200); //ok status
            res.body.should.be.an.instanceOf(Object); //test if res.body is instance of an array 
            res.body.should.have.property("studNo").should.not.match(/[a-z]/).with.lengthOf.above(0);
            res.body.should.have.property("name").should.not.match(/[0-9]/).with.lengthOf.above(0);
            res.body.should.have.property("bdate").should.not.match(/[a-z]/).with.lengthOf.above(0);
            done();
         });
          //response of 200 is array of obj.
      });
    });
    
    // npm install --save supertest should-http
});