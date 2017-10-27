'use strict';

import {greet, invertCase} from '../js/app'; //import the functions to test!

/* tests go here */
//{Feature} should {test}
describe('Basic Math', function(){
    //tests
    it('Should add numbers correctly', function(){
        //javascript
        let sum = 1+1;

        //assertion
        expect(sum).toEqual(2);
    })
})

describe('InvertCase should invert case', function(){
    it('Should invert the tag xXxSniPerELitExXx', function(){
        let string = 'xXxSniPerELitExXx';
        string = invertCase(string);

        expect(string).toEqual('XxXsNIpERelITeXxX');
    })
})