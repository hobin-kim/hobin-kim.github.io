/**
 * Google Apps Script for Word Cloud API
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
 */

function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
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

  return ContentService
    .createTextOutput(JSON.stringify(responses))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  try {
    var body = JSON.parse(e.postData.contents);
    var text = String(body.text || '').trim().substring(0, 200);

    if (text) {
      sheet.appendRow([text, new Date()]);
    }
  } catch (err) {
    // ignore malformed requests
  }

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
