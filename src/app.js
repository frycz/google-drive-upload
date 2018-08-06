import Gapi from 'google-client-api';


class GoogleDriveUpload {
    _apiKey = null;
    _clientId = null;
    _scope = 'https://www.googleapis.com/auth/drive';

    init = ({ apiKey, clientId }) => {
        this._apiKey = apiKey;
        this._clientId = clientId;
    }

    upload = async ({ title, text }) => {
        const gapi = await this._initGapi();
        await  this._loadClientAuth(gapi);
        await  this._initClient(gapi);
        if (!gapi.auth2.getAuthInstance().isSignedIn.get()) {
            await  this._authenticateUser(gapi);
        }
        await this._uploadFile(gapi, title, text);
    }

    _initGapi = () => {
        return Gapi();
    }

    _loadClientAuth = (gapi) => {
        return new Promise((resolve, reject) => {
            gapi.load('client:auth2', resolve);
        });
    }

    _initClient = (gapi) => {
        return gapi.client.init({
            'apiKey': this._apiKey,
            'clientId': this._clientId,
            'scope': this._scope,
        })
    }

    _authenticateUser = (gapi) => {
        return gapi.auth2.getAuthInstance().signIn({
            scope: this._scope
        })
    }

    _uploadFile = (gapi, title, text) => {
        const boundary = 'iv4qtco527t8uifggsbmmjs6296qu3ou';
        const delimiter = "\r\n--" + boundary + "\r\n";
        const close_delim = "\r\n--" + boundary + "--";
    
        var contentType = 'application/vnd.google-apps.document';
        var metadata = {
            'name': title,
            'mimeType': contentType
        };
    
        var base64Data = btoa(text);
        var multipartRequestBody =
            delimiter +
            'Content-Type: application/json; charset=UTF-8\r\n\r\n' +
            JSON.stringify(metadata) +
            delimiter +
            'Content-Type: text/plain\r\n' +
            'Content-Transfer-Encoding: base64\r\n' +
            '\r\n' +
            base64Data +
            close_delim;
    
        return gapi.client.request({
            'path': 'https://www.googleapis.com/upload/drive/v3/files',
            'method': 'POST',
            'params': {'uploadType': 'multipart'},
            'headers': {
            'Content-Type': 'multipart/related; boundary=' + boundary,
            'Content-Length': multipartRequestBody.length
            },
            'body': multipartRequestBody
    
        })
    }
}

export default new GoogleDriveUpload();
