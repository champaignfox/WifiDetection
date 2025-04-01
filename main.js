// main.js - Initializes the app and manages navigation
var wifi, isPremium = false;

function OnStart() {
    app.SetOrientation("Portrait");
    isPremium = app.LoadBoolean("isPremium", false);
    
    var mainLay = app.CreateLayout("Linear", "FillXY");
    var tabs = CreateTabs(mainLay);
    
    app.AddLayout(mainLay);
    wifi = app.CreateWifi();
}
