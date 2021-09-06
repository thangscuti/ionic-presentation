import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: "io.ionic.starter",
  appName: "myApp",
  webDir: "build",
  bundledWebRuntime: false,
  // server: {
  //   // url: "http://192.168.0.101:8101",
  //   hostname: "app",
  //   iosScheme: "httpsionic",
  //   androidScheme: "http",
  //   allowNavigation: ["ionic://app/*", "httpsionic://*", "192.0.2.1"],
  // },
  // ios: {
  //   // User agent of Capacitor WebView for iOS
  //   overrideUserAgent: "my custom user agent for iOS",
  //   // String to append to the original user agent of Capacitor WebView for iOS.
  //   appendUserAgent: "string to append for iOS",
  //   // Background color of Capacitor WebView for iOS only
  //   backgroundColor: "#ffffff",
  //   // Configure the WebView's UIScrollView's content inset behavior
  //   // Default is never
  //   // Possible values are "automatic", "scrollableAxes", "never" and "always"
  //   // https://developer.apple.com/documentation/uikit/uiscrollview/contentinsetadjustmentbehavior
  //   contentInset: "always",
  //   // Some Cordova plugins require to configure the linker flags
  //   cordovaLinkerFlags: ["-ObjC"],
  //   // A Boolean value that determines whether pressing on a link displays a preview of
  //   // the destination for the link.
  //   allowsLinkPreview: true,

  //   // A Boolean value that determines whether to hide native iOS logs or not
  //   // Default is false
  //   hideLogs: true,
  // },
};

export default config;
