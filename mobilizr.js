/*
 * Mobilizr
 * First attempt at a useful mobile detection and manipulation library
 * Author: Mark Perkins, mark@allmarkedup.com
 *
 */

var Mobilizr = (function( win, doc, undefined ){
    
    var mob              = {},
        device_results   = {},
        device_tests     = {},
        ua               = navigator.userAgent,
        docElement       = doc.documentElement,
        classes          = [];

    /**** device-related tests ****/
        
    device_tests['iPhone'] = function()
    {
        return /iPhone/.test(ua);
    };
    
    device_tests['iPad'] = function()
    {
        return /iPad/.test(ua);       
    };
    
    device_tests['iPod'] = function()
    {
        return /iPod/.test(ua);
    };
    
    device_tests['iOS'] = function()
    {
        return /(iPhone|iPad|iPod)/.test(ua);
    };
    
    device_tests['Android'] = function()
    {
        return /Android/.test(ua);
    };
    
    device_tests['WebKit'] = function()
    {
        return ( /AppleWebKit/.test(ua) && /Mobile/.test(ua) ) ? true : false;
    };
    
    device_tests['OperaMobile'] = function()
    {
        return /Opera Mobi/.test(ua);
    };
    
    device_tests['Fennec'] = function()
    {
        return /Fennec/.test(ua);
    };
    
    // run the device_tests
    
    for ( test in device_tests )
    {
        if ( device_tests.hasOwnProperty(test) )
        {
            var res = device_tests[ test ]();
            if ( res ) mob.isMobile = true;
            classes.push( ( ( device_results[ test.toLowerCase() ] = res ) ?  '' : 'not-' ) + test.toLowerCase() );
        }
    }
    
    mob.isMobile = mob.isMobile || false;
    classes.push( ( mob.isMobile ?  '' : 'not-' ) + 'mobile' );
    
    docElement.className += ' ' + classes.join(' ');
    
    // provide access to test results
    
    mob.is = function( key )
    {
        return device_results[key.toLowerCase()];
    }

    /**** viewport properties getters/setters ****/
    
    viewport = {
        
        get_width : function()
        {
            
        },
        
        set_width : function()
        {
                       
        },
        
        get_height : function()
        {
            
        },
        
        set_height : function()
        {
            
        }
        
    }
    
    mob.viewport = function( key, value )
    {
        return viewport[(( typeof value === 'string' || typeof value === 'number' ) ? 'set' : 'get' ) + '_' + key]();
    }
    
    /**** mobile browser manipulation functions ****/
    
    // scroll the address bar out of site in mobile safari
    mob.hideAddressBar = function()
    {
        setTimeout(function() {
    		window.scrollTo(0, 1);
    	}, 0);
    }
    
    return mob;
    
})( window, document );