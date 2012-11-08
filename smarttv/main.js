var widgetAPI ,pluginAPI , tvKey , NNaviPlugin;

var Main =
{
}

Main.onLoad = function()
{
	widgetAPI = new Common.API.Widget();
	pluginAPI = new Common.API.Plugin();
	tvKey = new Common.API.TVKeyValue();
	
 	widgetAPI.sendReadyEvent();
	window.onShow = Main.initKeys;    
}

Main.initKeys = function()
{
	NNaviPlugin = document.getElementById("pluginObjectNNavi");
	
	NNaviPlugin.SetBannerState(2);

	// For volume OSD	
	pluginAPI.unregistKey(tvKey.KEY_VOL_UP);
	pluginAPI.unregistKey(tvKey.KEY_VOL_DOWN);
	pluginAPI.unregistKey(tvKey.KEY_MUTE);
	
	// For Menu key, Info.L key 
	pluginAPI.unregistKey(tvKey.KEY_MENU);
	pluginAPI.unregistKey(tvKey.KEY_INFOLINK);

	// For Exit key	
	pluginAPI.unregistKey(tvKey.KEY_EXIT);

}

