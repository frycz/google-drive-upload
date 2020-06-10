# Google Drive Upload
Easily build applications allowing users to upload text to Google Drive as Docs files.

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