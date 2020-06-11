# Google Drive Upload

[![GitHub license](https://img.shields.io/github/license/frycz/google-drive-upload.svg)](https://github.com/frycz/google-drive-upload/blob/master/LICENSE.md)
[![Package Control total downloads](https://img.shields.io/npm/dt/google-drive-upload.svg)](https://www.npmjs.com/package/google-drive-upload)
![npm](https://img.shields.io/npm/v/google-drive-upload)
[![Website shields.io](https://img.shields.io/website-up-down-green-red/https/frycz.github.io/google-drive-upload.svg)](https://frycz.github.io/google-drive-upload/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg?style=flat)](https://github.com/frycz/google-drive-upload/pulls)

Easily build applications allowing users to upload text to Google Drive as Docs files.

![Google Drive upload schema](https://developers.google.com/drive/images/drive-intro.png)

## Demo

- Go to [https://quicknote-91c7d.firebaseapp.com/](https://quicknote-91c7d.firebaseapp.com/)
- Login with your Google account
- Create a note
- Hover the note and click _upload_ button

## Installation

```
npm i google-drive-upload
```

## Example

- Go to [https://console.developers.google.com/apis](https://console.developers.google.com/apis)
- Generate `clientId` and web client `apiKey`
- Use the following code in your client application:

```
import GoogleDriveUpload from 'google-drive-upload';

GoogleDriveUpload.init({
    apiKey: 'your-api-key',
    clientId: 'your-client-id',
});

GoogleDriveUpload.upload({
    title: 'Document title',
    text: 'Message you want to save on your Google Drive',
})
.then(() => alert("Note successfully uploaded!"));
```

The user will be asked for permission to access their Google Drive during the first upload.

In case of any questions don't hesitate to contact me. Visit my Github account where you will find my email address and Twitter.