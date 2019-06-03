$(document).ready(function() {
 	function toggleNavFunction(i){
		return function(){
			$('.subnavigation-default').hide();
			$('.site-navigation').not('.s-nav-'+ i).hide();
			$('.s-nav-'+ i).toggle();
	        return false;
		}
	}
	var navItems = $('nav .item a');
	if (navItems.length) {
		navItems.each(function(index) {
			// skip the homepage
			if (index > 0) {
				$(this).click(function(e){
                    console.log(e);
                    debugger;
                    toggleNavFunction(index)
                });
			}
		});
	}

    $('.site-navigation .close-menu').click(function() {
        $('.site-navigation').hide();
    });
    $('.subnavigation-default .close-menu').click(function() {
        $('.subnavigation-default').hide();
    });

    /*
     * Subnavigation (span tekst verwijdert)
     */
    $('<span class="open-subnavigation"></span>').insertAfter($('.clustertitle-wrapper').find('h2'));
    $('.open-subnavigation').click(function() {
        $('.site-navigation').hide();
        $('.subnavigation-default').toggle();
        return false;
    });

// console.log($('h1.pagetitle').find('a'));
    if (($('.h1-wrapper h1').find('a')).length) {
        // console.log($('h1.pagetitle').find('a'));
        return false;
    }
    else {
        $('<a href="javascript:history.back();"></a>').prependTo('.h1-wrapper h1');
    }
});
    /*
     * tabs
     */
function TabsActivate(rootnode, selectedindex) {
    var rootdivs;
    function findDivs(parentnode) {
        var kids = parentnode.childNodes;
        var len = kids.length;
        var i;
        var result = [];
        var kid;

        for (i=0; i<len; i++) {
            kid = kids[i];
            if (kid.nodeName.toLowerCase() === "div") {
                result.push(kid);
            }
        }
        return result;
    }

    function activatePane(panes, selectedindex) {
        var classname;
        var i;
        for (i=0; i < panes.length; i++) {
            classname = panes[i].className.replace("tabsactive","tabsinactive");
            panes[i].className = classname.replace("tabsinactive",
                i === selectedindex ? "tabsactive" : "tabsinactive");
        }
    }

    rootdivs = findDivs(rootnode);
    activatePane(findDivs(rootdivs[0]), selectedindex);
    activatePane(findDivs(rootdivs[1]), selectedindex);
    return false;
}
 $(function() {
    $( ".accordion" ).accordion({
      heightStyle: "content"
    });
  });

