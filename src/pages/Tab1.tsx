import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  useEffect(() => {
    // if (isPlatform('web')) {
      alert('Start')
      const navigator = (window.navigator as any)
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
      if(navigator.presentation){
        navigator.presentation.requestSession('/board_preview')
        navigator.presentation.onavailablechange((dict: { available: any; }) => {
          console.log('presentation:onavailablechange', { dict })
          alert('available::!')
          if (dict.available) {
            console.log('presentation:dict.available');
            alert('available')
          } else {
            alert('not available')
          }
        })
      }else {
        alert('not available')
      }
     
      
    // }

    return () => {
    }
  }, [])
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
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
