import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class DataEncryptionService {

   getEncryptedData(text:any): String{
    var secret = "René Über";
  var b64 = CryptoJS.AES.encrypt(text, secret).toString();
  var e64 = CryptoJS.enc.Base64.parse(b64);
  var eHex = e64.toString(CryptoJS.enc.Hex);
    return eHex;
   }


   getDecryptedData(text:any): String{
    var secret = "mustbe16byteskey";
    text = 'bXVzdGJlMTZieXRlc2tleQ==';
    var decrypted = CryptoJS.AES.decrypt(text, secret);
    // let output = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
   // encrypted = encrypted.toString();
    //console.log("Cipher text__:" + decrypted.toString(CryptoJS.enc.Utf8));
    return decrypted.toString(CryptoJS.enc.Utf8);
   }


   getEncryptedData2(text:any): String{
    var encryptedBase64Key = 'bXVzdGJlMTZieXRlc2tleQ==';
    var parsedBase64Key = CryptoJS.enc.Base64.parse(encryptedBase64Key);
    //text = 'The quick brown fox jumps over the lazy dog. 👻 👻';
    var encryptedData = CryptoJS.AES.encrypt(text, parsedBase64Key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return encryptedData.toString();
   }

   getDecryptedData2(text:any): string{
    var encryptedBase64Key = 'bXVzdGJlMTZieXRlc2tleQ==';
    var parsedBase64Key = CryptoJS.enc.Base64.parse(encryptedBase64Key);
    //text = 'MX7sOkB67+1baIMjYZLBbZTUGr+hQbN44Ggq9fcJMjzZf/wg7fvyg4U9D4qabg5NsV/xHLDBVik2hU8dMLKPyw==';
    var decryptedData = CryptoJS.AES.decrypt(text, parsedBase64Key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    var decryptedText = decryptedData.toString(CryptoJS.enc.Utf8);
    return decryptedText;
   }
}
