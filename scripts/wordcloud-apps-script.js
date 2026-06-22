/**
 * Google Apps Script for Word Cloud API (JSONP version)
 *
 * Setup:
 * 1. Create a new Google Sheet
 * 2. Add headers in Row 1: "text" (A1), "timestamp" (B1)
 * 3. Go to Extensions > Apps Script
 * 4. Replace the default code with this entire file
 * 5. Click Deploy > New deployment
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Copy the deployment URL
 * 7. Paste it into _config.yml as wordcloud_api_url
 *
 * IMPORTANT: If you update this code, create a NEW deployment
 * (Deploy > New deployment). The old URL keeps the old code.
 */

function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Handle submit via GET parameter
  var submitText = (e.parameter && e.parameter.submit) || '';
  if (submitText) {
    var text = String(submitText).trim().substring(0, 200);
    if (text) {
      sheet.appendRow([text, new Date()]);
    }
  }

  // Return all responses
  var data = sheet.getDataRange().getValues();
  var responses = [];
  for (var i = 1; i < data.length; i++) {
    if (data[i][0]) {
      responses.push({
        text: String(data[i][0]),
        timestamp: data[i][1]
      });
    }
  }

  var json = JSON.stringify(responses);

  // Support JSONP callback to bypass CORS
  var callback = (e.parameter && e.parameter.callback) || '';
  if (callback) {
    return ContentService
      .createTextOutput(callback + '(' + json + ')')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }

  return ContentService
    .createTextOutput(json)
    .setMimeType(ContentService.MimeType.JSON);
}
