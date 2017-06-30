/**
 * Created by goosetaculous on 6/26/17.
 */
"use strict";
(()=>{
    /**
     *
     * @param cloze
     * @param partial
     * @param text
     * @returns {ClozedCard}
     * @constructor
     */
    function ClozedCard(text,cloze){
        if ( this instanceof ClozedCard ){
            this.cloze =  cloze
            this.fullText =  text
            if(!this.checkValidcloze()){
                console.log("OOPS this is NOT VALID")
            }else {
                this.partial =  this.removedCloze()
            }
        }else {
            return new ClozedCard(text,cloze)
        }
    }

    ClozedCard.prototype.cardinfo = function(){
        console.log(`Cloze of the card is "${this.cloze}"` );
        console.log(`FullText of the card is "${this.fullText}"` );
    }
    ClozedCard.prototype.removedCloze = function(){
        if (this.checkValidcloze()){
            return this.fullText.replace(this.cloze,"...")
        }else{
            return "This does NOT work"
        }
    }
    ClozedCard.prototype.checkValidcloze=function(){
        return this.fullText.indexOf(this.cloze) > -1 ?  true :  false
    }

    module.exports = ClozedCard
} )();

