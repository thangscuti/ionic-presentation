const fs = require('fs')

try {
  const data = fs.readFileSync('ios/capacitor-cordova-ios-plugins/CordovaPlugins.podspec', 'utf8')
  console.log(data);
  const oldText = `'CapacitorCordova'`;
  if(!data.includes('GCDWebServer')){
    const newText = `'CapacitorCordova' \n    s.dependency 'GCDWebServer', '~> 3.0'`
    console.log({oldText,newText})
    const newData = data.replace(oldText, newText)
    console.log(newData)
    fs.writeFileSync('ios/capacitor-cordova-ios-plugins/CordovaPlugins.podspec', newData, 'utf8')
  }
} catch (err) {
  console.error(err)
}


