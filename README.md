Thông thường khi cần tương tác đến thiết bị thì phải viết một module bằng code native để đẩy dữ liệu xuống js.
Các thư viện là có rất nhiều nhưng nó cũng có một nhược điểm là có quá nhiều code không sử dụng tới của thư viện dẫn đến app sẽ có dung lượng lớn.
Mình chỉ cần một vài thứ của mình thôi thì mình cần phải hiểu và viết được code native để làm nhiệm vụ này.

Bạn có thể tham khảo trong code bên trên cho 2 nền tảng Ios và Android.
Dưới Js khi sử dụng thì gọi module thông qua:

Android phải gọi quyền trước, ios thì không cần

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

var ReactNative = require('react-native')
module.exports = ReactNative.NativeModules.Contacts
