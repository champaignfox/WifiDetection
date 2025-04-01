// premium.js - Handles premium feature logic
function UpgradeToPremium() {
    app.Confirm("Upgrade to Premium for advanced features?", function(yes) {
        if (yes) {
            isPremium = true;
            app.SaveBoolean("isPremium", true);
            app.Alert("Upgrade Successful! Restart the app to access premium features.");
        }
    });
}

function ToggleAutoScan() {
    if (!isPremium) return;
    
    if (scanInterval) {
        clearInterval(scanInterval);
        scanInterval = null;
        app.Alert("Auto-Scan Disabled");
    } else {
        scanInterval = setInterval(ScanWiFi, 300000);
        app.Alert("Auto-Scan Enabled");
    }
}
