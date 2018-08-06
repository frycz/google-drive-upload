# Google Drive Upload
Easily upload text to Google Drive as Docs files.

## Example

```
import GoogleDriveUpload from 'google-drive-upload';

GoogleDriveUpload.init({
    apiKey: 'your-api-key',
    clientId: 'your-client-id',
});

GoogleDriveUpload.upload({
    title: 'Document title',
    text: 'Message you want to save no your Google Drive',
});
```