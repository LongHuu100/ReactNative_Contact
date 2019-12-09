// https://github.com/rt2zz/react-native-contacts
/* Android phải gọi quyền trước, ios thì không cần

import { PermissionsAndroid } from 'react-native';
import Contacts from '../components/contact';

async function getContats(){
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
    {
      title: 'Contacts',
      message: 'This app would like to view your contacts.'
    },
  );

  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    Contacts.getAll((err, contacts) => {
      if (err === 'denied'){
        DEBUG(Tag, err)
      } else {
        DEBUG(Tag, contacts)
      }
    })
  }
}
getContats()
*/

var ReactNative = require('react-native')
module.exports = ReactNative.NativeModules.Contacts
