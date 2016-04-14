/** 
* Enables escape key to close dialogs when pressed 
*/

$PBJQ(document).keypress(function(e) { 
    if (e.keyCode == 27) { 
        $(".Mrphs-directUrl").window.close();
    } 
});

