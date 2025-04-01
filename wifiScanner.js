// wifiScanner.js - Handles WiFi scanning logic
function ScanWiFi() {
    txtLog.SetText("Scanning...");
    
    wifi.Scan(function (networks) {
        var result = "\nDetected Networks:\n";
        var threats = "";
        
        networks.forEach(net => {
            result += `${net.ssid} (${net.bssid}) - ${net.level}dBm\n`;
            if (net.level > -40 || IsDuplicateMAC(networks, net.bssid)) {
                threats += `⚠️ Possible Attack on ${net.ssid}\n`;
            }
        });
        
        txtLog.SetText(result + (threats ? "\n" + threats : "\nNo Threats Detected"));
        if (threats) AlertUser("Potential WiFi Attack!", threats);
    });
}

function IsDuplicateMAC(networks, mac) {
    return networks.filter(net => net.bssid === mac).length > 1;
}
