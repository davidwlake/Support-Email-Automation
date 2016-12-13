/* google analytics below........ https://www.google.com/analytics/web/?et&authuser=0#management/Settings/a52479501w84958801p88076702/%3Fm.page%3DTrackingCode/
 https://developer.chrome.com/extensions/tut_analytics */
 var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-52479501-1']);
_gaq.push(['_trackPageview']);
(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
// this function will track button clicks
function trackButton(e) {
    _gaq.push(['_trackEvent', e, 'clicked']);
};

// this function changes the CSS properties of the items with a class of menu
// and hides them. It also changes the text next to the input box so it 
// prompts for a DDC ID when not on a DDC site. 
// i might be able to make this code more scalable for hiding the other menu items

function getId() {
	//var idDiv = document.getElementById("enterId");
	//idDiv.innerHTML = "Please enter DDC ID to Continue:";
	var idDiv = document.getElementById('enterField')
	idDiv.value = "Enter DDC ID";
	idDiv.style.color='red';
	idDiv.style.fontWeight="bold";
	document.getElementById("enterField").select();
};

/* Update the relevant fields with the new data */
function setDOMInfo(info) {
	// these 4 lines convert the function based variables into global variables to popup.js
	window.urlReset = info.urlReset;
	window.urlMobile = info.urlMobile;
	window.urlModeDebug = info.urlModeDebug;
	window.url3pDebug = info.url3pDebug;
	window.prefill = info.prefill;
	window.qamode = info.qamode;
	window.accountId = info.accountId;
	window.pageAlias = info.pageAlias;
	window.pageId = info.pageId;
	window.urlPixall = info.urlPixall;
	window.colorS = info.colorS;
	window.variationId = info.variationId;
	window.vehid = vehicleId;
	window.vinNo = info.vinNo;
	window.serviceDebug = info.serviceDebug;
	window.siteId = info.siteId;
	window.acctId = accountId;
	window.liveDomain = info.liveDomain;
	window.vehicleId = info.vehicleId;
	window.tabUrl = info.tabUrl;
	window.path = info.path;
	window.ddcServerName = info.ddcServerName;
	document.getElementById("enterField").value = info.siteId;
	document.getElementById("pagePath").innerHTML = window.path;
	document.getElementById("pagePath2").innerHTML = window.path;
	document.getElementById("pageAlias").innerHTML = window.pageAlias;
	document.getElementById("pageId").innerHTML = window.pageId;
	document.getElementById("colorS").innerHTML = window.colorS;
	document.getElementById("varid").innerHTML = window.variationId;
	document.getElementById("vinNo").innerHTML = window.vinNo;
	document.getElementById("liveDomain").innerHTML = window.liveDomain;
	document.getElementById("vehicleId").innerHTML = window.vehicleId;
	document.getElementById("enterField").select();
	document.getElementById("liveDomainHref").href = window.liveDomain;
	document.getElementById("actId").href = "http://prodevtools.dealerdotcom.corp/cgi-bin/siteinfo1.cgi?" + window.accountId + ".cms.dealer.com" + window.path;
	document.getElementById("vehid").href = "http://influxtools.dealer.com/cgi-bin/feed_archives.cgi?action=vehicleQuery&id=" + window.vehicleId;
	document.getElementById("audit").href = "https://apps.dealer.com/inventory/as/" + window.accountId + "/" + window.accountId + "-admin/i/index#/vehicle~summary?vin=" + window.vinNo + "&history";
	if (window.vinNo != "false")  {
		document.getElementById("hideTable").title = "show";
	}
	document.getElementById("showcase2").href = "http://wcinv-showcase01.dealer.ddc:9745/showcase/showcase/inventoryLocator/" + window.vehicleId + "?q=live&locale=en_US";

	// If We are visiting a non-DDC site and attempt to use the extension
	// this will run and prompt the user to enter a new ID in the text box. 
	if (info.accountId=="false") {
		getId();
	};
};

// this function loads a new tab based upon the "button listener" below 
// retains focus of active window and UI stays UP!
function ccload(ccurl) {
	chrome.tabs.create({ url: ccurl, active: false});
};	

// this function will house the array that builds the scale-able 
// URLs that will be called upon button click
// The button listener script will pass the module variable into ccmodule
// then pass the completed URL to ccload
function urlbuilder(ccmodule) {
	// this array is where I can list the URLs to be built with the 4 
	// global variables accountId, vinNo, vehicleId, tabUrl
	// URL is selected by the ID of the element clicked in popup.html
	var urls = {
		// CC URLs
		upgradeCenter : "https://apps.dealer.com/welcome/as/" + accountId + "/" + accountId + "-admin/upgradecenter",
		marketPlace :  "https://apps.dealer.com/marketplace/as/" + accountId + "/" + accountId + "-admin/#/",
		controlcenterwelcome : "https://apps.dealer.com/welcome/as/" + accountId + "/" + accountId + "-admin/dashboard/index",
		composer : "http://" + siteId + ".composer.dealer.com/website/as/" + accountId + "/" + accountId + "-admin/composer/index#website?debug=true",
		composerLocalHost : "http://" + accountId + ".composer.localhost.dealer.com/website/as/" + accountId + "/" + accountId + "-admin/composer/index#website",

		inventoryManager : "https://apps.dealer.com/inventory/as/" + accountId + "/" + accountId + "-admin/",
		incentivesManager : "https://apps.dealer.com/inventory/as/" + accountId + "/" + accountId + "-admin/market/incentivesmanager",
		incentivesFeeds : "https://apps.dealer.com/inventory/as/" + accountId + "/" + accountId + "-admin/incentive/manage",
		sbpro : "https://apps.dealer.com/promotions/as/" + accountId + "/" + accountId + "-admin/specialsbuilder/index",
		mediaLibrary : "https://apps.dealer.com/promotions/as/" + accountId + "/" + accountId + "-admin/medialibrary/index",
		allLeads : "https://apps.dealer.com/leads/as/" + accountId + "/" + accountId + "-admin/nav/index#all",
		websiteForms : "https://apps.dealer.com/leads/as/" + accountId + "/" + accountId + "-admin/nav/index#websiteforms",
		leadDistro : "https://apps.dealer.com/leads/as/" + accountId + "/" + accountId + "-admin/configure/leaddistribution",
		analytics: "https://apps.dealer.com/analytics/as/" + accountId + "/" + accountId + "-admin/reports/index",
		configuration : "https://apps.dealer.com/configuration/as/" + accountId + "/" + accountId + "-admin/",
		advertising : "https://apps.dealer.com/advertising/as/" + accountId + "/" + accountId + "-admin/",
		social: "https://apps.dealer.com/social/as/" + accountId + "/" + accountId + "-admin/",
		traderCarFlixGen : "https://apps.dealer.com/inventory/as/" + accountId + "/" + accountId + "-admin/carflixRegen/index?lang=en_US",
		
		// Inventory Tools
		queueFeed : "http://influxtools.dealer.com/feed-queuer/index.html",
		influxFeeds : "http://influxtools.dealer.com//cgi-bin/feed_archives.cgi?action=viewDealer&dealerid=" + accountId,
		influxVehicleRecord : "http://influxtools.dealer.com/cgi-bin/feed_archives.cgi?action=vehicleQuery&id=" + vehicleId,
		AuditTrail : "https://apps.dealer.com/inventory/as/" + accountId + "/" + accountId + "-admin//i/index#/vehicle~summary?vin=" + vinNo + "&history",
		exportViewer : "http://influxtools.dealer.com//cgi-bin/export.cgi?action=viewExportConf&string==" + accountId,
		exportManager: "http://influxtools.dealer.com//cgi-bin/export_new.cgi",
		solrCache : "http://la1websol-solrv9auto-vip.dealer.ddc:9650/solr-inventory/inventory/select?q=uuid%3A" + vehicleId + "&wt=xml",
		showcase: "http://wcinv-showcase01.dealer.ddc:9745/showcase/showcase/inventoryLocator/" + vehicleId + "?q=live&locale=en_US",
		
		// CMS links
		cmsIndex : "http://" + accountId + ".cms.dealer.com/index.htm",
		cmsRelative : "http://" + accountId + ".cms.dealer.com" + path,
		cmsNewVlp : "http://" + accountId + ".cms.dealer.com/new-inventory/index.htm",
		cmsUsedVlp : "http://" + accountId + ".cms.dealer.com/used-inventory/index.htm",
		cmsAllVlp : "http://" + accountId + ".cms.dealer.com/all-inventory/index.htm",
		cmsGlobalIncentives : "http://" + accountId + ".cms.dealer.com/global-incentives/index.htm",


		// URL Parameters
		modeEqualsReset : urlReset,
		mobile: urlMobile,
		sessionMobile: urlMobile,
		sessionMobile2: urlMobile,
		disablePixall : urlPixall,
		thirdPt : url3pDebug,
		modeDebug : urlModeDebug,
		pre : prefill,
		qamode : qamode,

		
		// Domain Tools
		dnsWatch: "http://www.dnswatch.info/",
		netTools: "http://network-tools.com/",
		mxLook: "http://mxtoolbox.com/",
		down: "http://www.downforeveryoneorjustme.com/",
		webTest: "http://webpagetest.dealer.ddc/",
		easy: "https://easybutton.dealer.ddc/",
		
		// Support Dev
		customCssDump : "http://" + accountId + ".cms.dealer.com/customcss/custom.css?_renderer=desktop",
		siteinfo: "http://prodevtools.dealerdotcom.corp/siteinfo.htm",
		dvsWeb: "http://dvs-web.dealer.ddc/sites/" + accountId,
		sitesearch: "http://sitesearch.int.dealer.com/",
		patternLibrary: "http://" + accountId + ".cms.dealer.com/pattern-library.htm",
		localHost: "http://" + accountId + ".localhost.dealer.com" + path,
		contextDump: "view-source:" + accountId + ".cms.dealer.com" + path + "?_contextDump=true",
		
		//Salesforce / DNA
		salesforce: "https://dealertrack-production.my.salesforce.com/_ui/search/ui/UnifiedSearchResults?searchType=2&str=" + accountId,
		dnaId: "http://dna.dealer.com/views/main?currentModule=ClientsRedirect&currentURI=/views/clients/link-to-client-dashboard%3FaccountId=" + accountId,
		dnaTicket: "http://dna.dealer.com/views/main?currentModule=ClientsRedirect&currentURI=/views/clients/link-to-client-dashboard%3FissueId=" + accountId,
		
		// Help
		help: "https://docs.dealer.com/display/Support/Support+Multitool"		
	};
	
//	alert(urls[ccmodule]);
	var link = (urls[ccmodule]);
	ccload(link);	
};

/* Once the active window is ready call the contentscript to scrape the site... */
window.addEventListener("DOMContentLoaded", function() {
    /* ...query for the active tab... */
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        /* ...and send a request for the DOM info... */
        chrome.tabs.sendMessage(
                tabs[0].id,
                { from: "popup", subject: "DOMInfo" },
                /* ...also specifying a callback to be called 
                 *    from the receiving end (content script) */
                setDOMInfo);
    });
});

// this function powers the dynamic classes for the accordion menu
// Menu functionality and code are documented here
// http://cssmenumaker.com/blog/flat-jquery-accordion-menu-tutorial#
// http://cssmenumaker.com/builder/2346111

document.addEventListener('DOMContentLoaded', function() {
	$(document).ready(function(){
		$('#cssmenu > ul > li ul').each(function(index, e){
			var count = $(e).find('li').length;
			var content = '<span class="cnt">' + count + '</span>';
			$(e).closest('li').children('a').append(content);
		});
		$('#cssmenu ul ul li:odd').addClass('odd');
		$('#cssmenu ul ul li:even').addClass('even');
		$('#cssmenu > ul > li > a').click(function() {
		    $('#cssmenu li').removeClass('active');
		    $(this).closest('li').addClass('active');	
		    var checkElement = $(this).next();
		    if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
				$(this).closest('li').removeClass('active');
				checkElement.slideUp('normal');
		    }
			if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
				$('#cssmenu ul ul:visible').slideUp('normal');
				checkElement.slideDown('normal');
			}
		    if($(this).closest('li').find('ul').children().length == 0) {
				return true;
		    } else {
				return false;	
			}		
		});
	});
});

// Button listener grabs Id of button clicked with class of "menu" 
// then calls urlbuilder function
document.addEventListener('DOMContentLoaded', function() {
	var id = "false";
	var i;
	var buttons = document.getElementsByClassName('menu');
	for (i = 0; i < buttons.length; i++){
		if(buttons.hasOwnProperty(i)){
			buttons[i].addEventListener("click", function(){
				module = this.id; //DOMElement clicked in popup = should be CC module or similar
				if(document.getElementById('enterField').value != window.siteId ) {
					window.siteId = document.getElementById('enterField').value;
					window.accountId= document.getElementById('enterField').value;
				}countId= document.getElementById('enterField').value;

				trackButton(module); // this *should* send button click info to GA
				urlbuilder(module); 
			}, false);
		};
	};
});
