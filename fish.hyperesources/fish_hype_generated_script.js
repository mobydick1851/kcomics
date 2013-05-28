//	HYPE.documents["fish"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "fish.hyperesources";
	var documentName = "fish";
	var documentLoaderFilename = "fish_hype_generated_script.js";
	var mainContainerID = "fish_hype_container";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_160 == "undefined") {
		if(typeof window.HYPE_160_DocumentsToLoad == "undefined") {
			window.HYPE_160_DocumentsToLoad = new Array();
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=160';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// handle attempting to load multiple times
	if(HYPE.documents[documentName] != null) {
		var index = 1;
		var originalDocumentName = documentName;
		do {
			documentName = "" + originalDocumentName + "-" + (index++);
		} while(HYPE.documents[documentName] != null);
		
		var allDivs = document.getElementsByTagName("div");
		var foundEligibleContainer = false;
		for(var i = 0; i < allDivs.length; i++) {
			if(allDivs[i].id == mainContainerID && allDivs[i].getAttribute("HYPE_documentName") == null) {
				var index = 1;
				var originalMainContainerID = mainContainerID;
				do {
					mainContainerID = "" + originalMainContainerID + "-" + (index++);
				} while(document.getElementById(mainContainerID) != null);
				
				allDivs[i].id = mainContainerID;
				foundEligibleContainer = true;
				break;
			}
		}
		
		if(foundEligibleContainer == false) {
			return;
		}
	}
	
	var hypeDoc = new HYPE_160();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",aT:"i",N:"i",f:"d",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",aI:"i",S:"i",bH:"d",l:"d",aX:"i",T:"i",m:"c",bI:"f",aJ:"i",n:"c",aK:"i",bJ:"f",X:"i",aL:"i",A:"c",aZ:"i",Y:"bM",B:"c",bK:"f",bL:"f",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};
	
	var resources = {"3":{n:"heart.png",p:1},"1":{n:"fish2.png",p:1},"2":{n:"flower.png",p:1},"0":{n:"fish.png",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",onSceneTimelineCompleteActions:[{type:3,timelineIdentifier:"8"}],v:{"2":{o:"content-box",h:"0",x:"visible",a:316,q:"100% 100%",b:16,j:"absolute",r:"inline",c:268,k:"div",z:"1",d:113},"3":{o:"content-box",h:"1",x:"visible",a:16,q:"100% 100%",b:254,j:"absolute",r:"inline",c:214,k:"div",z:"2",d:121}},n:"1",T:{"8":{d:5.02,i:"8",n:"timeline2",a:[{f:"2",t:0,d:2.16,i:"a",e:0,r:1,s:10,o:"2"},{f:"2",t:0,d:2.16,i:"b",e:224,r:1,s:0,o:"2"},{f:"2",t:2.15,d:2.17,i:"b",e:28,r:1,s:256,o:"3"},{f:"2",t:2.15,d:2.17,i:"a",e:386,r:1,s:370,o:"3"}],f:30},kTimelineDefaultIdentifier:{d:5.1,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:2.18,i:"a",e:10,s:316,o:"2"},{f:"2",t:0,d:2.18,i:"b",e:0,s:16,o:"2"},{f:"2",t:2.18,d:2.22,i:"a",e:370,s:16,o:"3"},{f:"2",t:2.18,d:2.22,i:"b",e:256,s:254,o:"3"}],f:30}},o:"1"},{x:1,p:"600px",c:"#FFFFFF",v:{"5":{o:"content-box",h:"2",x:"visible",a:61,q:"100% 100%",b:44,j:"absolute",r:"inline",c:190,k:"div",z:"1",d:156}},n:"2",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"4"},{x:2,p:"600px",c:"#FFFFFF",v:{"7":{o:"content-box",h:"3",x:"visible",a:100,q:"100% 100%",b:41,j:"absolute",r:"inline",c:118,k:"div",z:"1",d:118}},n:"3",T:{kTimelineDefaultIdentifier:{d:6.03,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:3.28,i:"a",e:177,s:100,o:"7"},{f:"2",t:0,d:3.28,i:"b",e:206,s:41,o:"7"},{f:"2",t:3.28,d:2.05,i:"a",e:466,s:177,o:"7"},{f:"2",t:3.28,d:2.05,i:"b",e:48,s:206,o:"7"}],f:30}},o:"6"}];
	
	var javascripts = [];
	
	var functions = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("functions." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			functions[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setResources(resources);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.functions = functions;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID(mainContainerID);
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setGraphicsAcceleration(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());

