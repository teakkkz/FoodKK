var Arrayz = require('../ArrayList.js');
var assert = require('chai').assert;
var mocha  = require('mocha');
var describe = mocha.describe;


    describe ('Test:add method', function(){
        var a = new Arrayz();
        it('test:add 1', function () {
            
            a.add(1); 
            var b = a.data.toString();
            assert.strictEqual('1',b);
        });
        it('test:add 2', function () {
            a.add(2); 
            var b = a.data.toString();
            assert.strictEqual('1,2',b);
        });
    });
    describe ('Test:size', function(){
        var a = new Arrayz();
        it('test:size', function () {
            var s = a.size()
            assert.strictEqual(0,s);
        });
    });


    describe ('Test:remove method', function(){
        var a = new Arrayz();
        it('test:remove 0', function () {
            a.add(0)
            a.remove(0); 
            var b = a.data.toString();
            assert.strictEqual('',b);
        });
        it('test:remove null', function () {
            var abc = a.remove(0); 
            assert.strictEqual("this data is null",abc);
        });
});

    describe ('Test:Getidx method', function(){
        var a = new Arrayz();
        it('test:getidx', function () {
            a.add(1)
            var ga = a.Getidx(0)
            assert.strictEqual(1,ga);
        });
        it('test:index is null', function () {
            a.remove(0);
            var g = a.Getidx(0)
            assert.strictEqual(undefined,g);
        });
});

    describe ('Test:Trim', function(){
        var a = new Arrayz();
        it('test:trim', function () {
            a.add(1);
            a.add(1);
            var tmp = a.trim();
            assert.strictEqual(2,tmp);
         });
    
        it('test:trim', function () {
            a.remove(0);
            a.remove(0);
            var tmp = a.trim();
            assert.strictEqual(0,tmp);
        });

        
});











