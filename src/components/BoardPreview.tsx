import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { observer } from 'mobx-react-lite';
import { useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import ExploreContainer from './ExploreContainer';
import { counter } from '../store/Counter';

const BoardPreview: React.FC = observer(() => {
  const number = useSelector(state => state.decrease.number)
  const [value, setValue] = useState(0)
  useEffect(() => {
    // let session;
    // document.addEventListener('deviceready', () => {
    //   console.log('onDeviceReady');
    // }, false);
   
    // setInterval(() => {
     
    // }, 1000);
    // const newValue = value + 1;
    //   console.log({newValue});
    //   setValue(newValue)
    // navigator.presentation.onpresent =  (event) => {
    //   // if (!session) {
    //   //   session = event.session;
    //   //   session.onmessage = function(msg){
    //   //     setValue(msg)
    //   //   }
    //   // }
    // };
   
  }, [value])
  const onPress = () => {
    const newValue = counter.count + 1;
    counter.count = newValue;
    // const newValue = value + 1;
    // setValue(newValue)

  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>BOARD PREVIEW</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">BOARD PREVIEW</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton style={{width: '100%', textAlign: 'center'}} onClick={onPress} title="Press"></IonButton>
        <IonText color="danger" style={{width: '100%', textAlign: 'center'}}>
          <h1>{number}</h1>
        </IonText>
      </IonContent>
    </IonPage>
  );
});

export default BoardPreview;
