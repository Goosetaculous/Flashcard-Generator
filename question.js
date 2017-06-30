/**
 * Created by goosetaculous on 6/27/17.
 */
(function(){
    var basic = [
    {
        back: "George Washington",
        front: "Who was the first president of the United States?"
    }
]

    var  clozeDeleted= [
        {
            cloze: "George Washington",
            partial:"was the first president of the United States.",
            fullText:"George Washington was the first president of the United States."
        }
    ]

    module.exports ={
        "basic":basic,
        "clozeDeleted": clozeDeleted
    }
})();





