chrome.contextMenus.create({
    title: "このページをSSL-VPN GateWayで開く",
    onclick: function(info, tab) {
        var url = info.pageUrl;
        var host = url.replace(/https?:\/\/([^\/]+).*/, "$1");
        var path = url.replace(/https?:\/\/([^\/]+)(.*)/, "$2");
        if(host != "gateway.itc.u-tokyo.ac.jp") {        
        	location.href = 
		    chrome.tabs.create({
		        url: "https://gateway.itc.u-tokyo.ac.jp" + path + ",DanaInfo=" + host
		    });
		}
    }
});
