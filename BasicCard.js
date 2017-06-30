/**
 * Created by goosetaculous on 6/26/17.
 */
"use strict";
(()=>{
    /**
     * @param font - front of the card
     * @param back - back of the card
     * @constructor
     */
    function BasicCard(front, back){
        if ( this instanceof BasicCard){
            this.front =  front
            this.back =  back
        }else {
            return new BasicCard(front, back)
        }
    }

    BasicCard.prototype.cardinfo = function(){
        console.log(`Front of the card is "${this.front}"` );
        console.log(`Back of the card is "${this.back}"` );
    }

    module.exports = BasicCard
} )();

