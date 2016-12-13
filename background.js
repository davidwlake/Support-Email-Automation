function setSub() {
    var cat = document.getElementById('category');
    var sel = cat.value;
    var sub = document.getElementById('sub');
    if (sel == "Analytics") {
        sub.innerHTML =
            '<select name="analytics" id="analytics" size="1"><option value="">--None--</option><option value="Advertising">Advertising</option><option value="Digital Retailing">Digital Retailing</option><option value="Inventory">Inventory</option><option value="Leads">Leads</option><option value="Managed Services">Managed Services</option><option value="Mobile Analytics App">Mobile Analytics App</option><option value="Web-Stats">Web-Stats</option></select>';
    };
    if (sel == "Compliance") {
        sub.innerHTML = '<select name="compliance" id="compliance" size="1"><option value="">--None--</option><option value="Approval">Approval</option><option value="Colorized Stock Photography">Colorized Stock Photography</option><option value="Disapproval">Disapproval</option><option value="Resubmission">Resubmission</option><option value="Vin Decoding">Vin Decoding</option></select>';
    };
    if (sel == "Composer") {
        sub.innerHTML = '<select name="composer" id="composer" size="1"><option value="">--None--</option><option value="3rd Party Integration Tool">3rd Party Integration Tool</option><option value="Advance Composer">Advance Composer</option><option value="Composer Tools">Composer Tools</option><option value="Design Editor">Design Editor</option><option value="Design Selector">Design Selector</option><option value="Display Config">Display Config</option><option value="Finance Driver">Finance Driver</option><option value="Forms">Forms</option><option value="MenuDriver">MenuDriver</option><option value="MyCars">MyCars</option><option value="Payment Driver">Payment Driver</option><option value="Reserve It Now">Reserve It Now</option><option value="Seamless Mobile">Seamless Mobile</option><option value="Showroom">Showroom</option><option value="Site Down">Site Down</option><option value="Slow Load">Slow Load</option><option value="Trade Driver">Trade Driver</option><option value="Website Management">Website Management</option><option value="Widget Display">Widget Display</option></select>';
    };
    if (sel == "ControlCenter") {
        sub.innerHTML = '<select name="controlCenter" id="composer" size="1"><option value="">--None--</option><option value="Company Information">Company Information</option><option value="Internal Tools">Internal Tools</option><option value="Phone Manager">Phone Manager</option><option value="Smartmail">Smartmail</option><option value="Upgrade Center/Marketplace">Upgrade Center/Marketplace</option><option value="User Manager">User Manager</option></select>';
    };
    if (sel == "Customization") {
        sub.innerHTML = '<select name="customization" id="customization" size="1"><option value="">--None--</option><option value="3rd Party">3rd Party</option><option value="Custom Header">Custom Header</option><option value="Design Change">Design Change</option><option value="Web Development">Web Development</option></select>';
    };
    if (sel == "DDC Inventory") {
        sub.innerHTML = '<select name="ddcInventory" id="ddcInventory" size="1"><option value="">--None--</option><option value="Batch Image Upload">Batch Image Upload</option><option value="CPO">CPO</option><option value="Craigslist Template Generator">Craigslist Template Generator</option><option value="Custom Filter">Custom Filter</option><option value="Custom Parser Setup">Custom Parser Setup</option><option value="Customer Export Setup">Customer Export Setup</option><option value="Export">Export</option><option value="Feed Run">Feed Run</option><option value="FTP Setup">FTP Setup</option><option value="Images/Videos">Images/Videos</option><option value="Incentives Feeds">Incentives Feeds</option><option value="Incentives Manager">Incentives Manager</option><option value="Influx">Influx</option><option value="Inventory Lifecycles">Inventory Lifecycles</option><option value="Inventory Manager">Inventory Manager</option><option value="Mobile Lot Capture">Mobile Lot Capture</option><option value="Photo Refresh">Photo Refresh</option><option value="VIN Decode">VIN Decode</option></select>';
    };
    if (sel == "DDC Leads") {
        sub.innerHTML = '<select name="ddcLeads" id="ddcLeads" size="1"><option value="">--None--</option><option value="Contact Manager">Contact Manager</option><option value="Lead Distribution Rules">Lead Distribution Rules</option><option value="LeadMachine">LeadMachine</option></select>';
    };
    if (sel == "Digital Retailing") {
        sub.innerHTML = '<select name="digitalRetailing" id="digitalRetailing" size="1"><option value="">--None--</option></select>';
    };
    if (sel == "Media") {
        sub.innerHTML = '<select name="media"  id="media" size="1"><option value="">--None--</option><option value="Batch Image Upload">Batch Image Upload</option><option value="Media Library">Media Library</option><option value="Specials">Specials</option><option value="Video">Video</option></select>';
    };
    if (sel == "Site Outage") {
        sub.innerHTML = '<select name="siteOutage" id="siteOutage" size="1"><option value="">--None--</option></select>';
    };
    if (sel == "Site Update") {
        sub.innerHTML = '<select name="siteUpdate" id="siteUpdate" size="1"><option value="">--None--</option><option value="Advertisment">Advertisment</option><option value="Custom Form">Custom Form</option><option value="Custom Page">Custom Page</option><option value="Departments">Departments</option><option value="DNS Change">DNS Change</option><option value="Hours">Hours</option><option value="Navigation">Navigation</option><option value="Phone #s">Phone #s</option><option value="Slides">Slides</option><option value="Social Toolbar">Social Toolbar</option><option value="Specials">Specials</option><option value="Staff Page">Staff Page</option><option value="Text">Text</option><option value="Video">Video</option></select>';
    };
    if (sel == "Social") {
        sub.innerHTML = '<select name="social" size="1"><option value="">--None--</option><option value="Content Suggester">Content Suggester</option><option value="Dealer Ratings">Dealer Ratings</option><option value="Facebook Social Apps">Facebook Social Apps</option><option value="Real Time Feeds">Real Time Feeds</option><option value="RepDriver">RepDriver</option><option value="Reputation Monitor">Reputation Monitor</option><option value="Service Marketing">Service Marketing</option><option value="SmartBlog">SmartBlog</option><option value="Social Alerts">Social Alerts</option><option value="Social Syndication">Social Syndication</option></select>';
    };
    if (sel == "Training") {
        sub.innerHTML = '<select name="training" size="1"><option value="">--None--</option></select>';
    };
    if (sel == "User Admin") {
        sub.innerHTML = '<select name="userAdmin" size="1"><option value="">--None--</option><option value="Password Reset">Password Reset</option><option value="Permissions">Permissions</option><option value="User Addition/ Removal">User Addition/ Removal</option><option value="User Removals">User Removals</option></select>';
    };
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('category').addEventListener('change', setSub);
});