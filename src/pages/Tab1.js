import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  let session
  useEffect(() => {
    // if (isPlatform('web')) {
      // alert('Start')
      // const navigator = (window.navigator as any)
      // console.log('presentation:tab3 started')
      // const session = presentation.requestSession('/board_preview')
      // session.onmessage((msg: any) => {
      //   console.log(`presentation::${msg}`)
      //   alert('presentation:onmessage')
      // })
      // session.onstatechange(() => {
      //   console.log('presentation:onstatechange')
      //   alert('onstatechange')
      // })
      // alert(`${session?.state}::`)
      console.log();
      // if(navigator.presentation){
      //   navigator.presentation.onavailablechange=function(dict: { available: any; }){
      //     if(dict.available){
      //      session = navigator.presentation.requestSession('/board_preview');
      //     } else {
      //     }
      //   };
      // }else {
      //   alert('not available')
      // }
     
    // }
  //   alert('start using the api')
  //   window['__onGCastApiAvailable'] = function(isAvailable, err) {
  //     if (isAvailable) {
  //         // start using the api!

  //         // alert('start using the api')
  //     }
  // };
    document.addEventListener('deviceready',  () => {
      // alert('start using the api')
    var chrome = window.chrome;

    // File globals
    var _session;
    var _media;

    initialize();

    function initialize () {
      console.log("initialize");
      
        // use default app id
        var appId = chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID;
        console.log({appId});
        var apiConfig = new chrome.cast.ApiConfig(new chrome.cast.SessionRequest(appId), function sessionListener (session) {
                // The session listener is only called under the following conditions:
                // * will be called shortly chrome.cast.initialize is run
                // * if the device is already connected to a cast session
                // Basically, this is what allows you to re-use the same cast session
                // across different pages and after app restarts
                alert('SessionRequest')
        }, function receiverListener (receiverAvailable) {
                alert('receiverListener'+ receiverAvailable)

                // receiverAvailable is a boolean.
                // True = at least one chromecast device is available
                // False = No chromecast devices available
                // You can use this to determine if you want to show your chromecast icon
        });

        // initialize chromecast, this must be done before using other chromecast features
        chrome.cast.initialize(apiConfig, function () {
            // Initialize complete
            // Let's start casting
            alert('receiverListener')
            requestSession();
        }, function (err) {
            // Initialize failure
            console.log(err);
        });
    }

    function requestSession () {
        // This will open a native dialog that will let
        // the user choose a chromecast to connect to
        // (Or will let you disconnect if you are already connected)
        chrome.cast.requestSession(function (session) {
            // Got a session!
            _session = session;
            console.log({session});
            // Load a video
            // loadMedia();
          //   // This will begin an active scan for routes
          // chrome.cast.cordova.scanForRoutes(function (routes) {
          //   console.log({routes});
          //   // Here is where you should update your route selector view with the current routes
          //   // This will called each time the routes change
          //   // routes is an array of "Route" objects (see below)
          // }, function (err) {
          //   // Will return with err.code === chrome.cast.ErrorCode.CANCEL when the scan has been ended
          // });
        }, function (err) {
            // Failed, or if err is cancel, the dialog closed
            console.log(err);
        });
    }

    function loadMedia () {
        var videoUrl = 'https://ia801302.us.archive.org/1/items/TheWater_201510/TheWater.mp4';
        var mediaInfo = new chrome.cast.media.MediaInfo(videoUrl, 'video/mp4');

        _session.loadMedia(new chrome.cast.media.LoadRequest(mediaInfo), function (media) {
            // You should see the video playing now!
            // Got media!
            _media = media;

            // Wait a couple seconds
            setTimeout(function () {
                // Lets pause the media
                pauseMedia();
            }, 4000);

        }, function (err) {
            // Failed (check that the video works in your browser)
            console.log(err);
        });
    }

    function pauseMedia () {
        _media.pause({}, function () {
            // Success

            // Wait a couple seconds
            setTimeout(function () {
                // stop the session
                stopSession();
            }, 2000);

        }, function (err) {
            // Fail
            console.log(err);
        });
    }

    function stopSession () {
        // Also stop the session (if )
        _session.stop(function () {
            // Success
        }, function (err) {
            // Fail
            console.log(err);
        });
    }
    })

    return () => {
    }
  }, [])
  
  let ping  = 1; 
  const onClickSendMessage = () => {
    if(session){
      session.postMessage(JSON.stringify({message:'Khanh san', lang:'vi'}));
    }
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        <IonButton onClick={onClickSendMessage} title={'click here'}></IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
