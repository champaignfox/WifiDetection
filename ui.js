// ui.js - Manages UI components (tabs, buttons, layouts)
function CreateTabs(parent) {
    var tabs = app.CreateTabs("Scan,Logs,Settings", 1, 0.1, "Material");
    parent.AddChild(tabs);
    
    SetupScanPage(tabs);
    SetupLogsPage(tabs);
    SetupSettingsPage(tabs);
    
    return tabs;
}

function SetupScanPage(tabs) {
    var layScan = app.CreateLayout("Linear", "FillXY");
    
    var title = app.CreateText("WiFi Security Monitor", 1, 0.1, "Bold,Center,Material");
    title.SetTextSize(24);
    layScan.AddChild(title);
    
    var btnScan = app.CreateButton("🔍 Scan WiFi", 0.6, 0.1, "Material");
    btnScan.SetMargins(0, 0.02, 0, 0.02);
    btnScan.SetOnTouch(ScanWiFi);
    layScan.AddChild(btnScan);
    
    txtLog = app.CreateText("Waiting for scan...", 0.9, 0.5, "Multiline,Left,Material");
    txtLog.SetTextSize(16);
    layScan.AddChild(txtLog);
    
    tabs.AddTab("Scan", layScan);
}

function SetupLogsPage(tabs) {
    var layLogs = app.CreateLayout("Linear", "FillXY");
    var txtLogs = app.CreateText("No logs yet...", 0.9, 0.8, "Multiline,Left,Material");
    txtLogs.SetTextSize(16);
    layLogs.AddChild(txtLogs);
    tabs.AddTab("Logs", layLogs);
}

function SetupSettingsPage(tabs) {
    var laySettings = app.CreateLayout("Linear", "FillXY");

    var chkAutoScan = app.CreateCheckBox("Enable Auto-Scan (Premium)", 0.8, "Material");
    chkAutoScan.SetEnabled(isPremium);
    chkAutoScan.SetOnTouch(ToggleAutoScan);
    laySettings.AddChild(chkAutoScan);

    var chkAlerts = app.CreateCheckBox("Enable Security Alerts (Premium)", 0.8, "Material");
    chkAlerts.SetEnabled(isPremium);
    laySettings.AddChild(chkAlerts);

    if (!isPremium) {
        var btnUpgrade = app.CreateButton("⭐ Upgrade to Premium", 0.8, 0.1, "Material");
        btnUpgrade.SetOnTouch(UpgradeToPremium);
        laySettings.AddChild(btnUpgrade);
    }
    
    tabs.AddTab("Settings", laySettings);
}
