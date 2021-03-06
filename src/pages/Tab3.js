import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { observer } from 'mobx-react-lite';
import { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ExploreContainer from '../components/ExploreContainer';
import { counter } from '../store/Counter';
import { decrease } from '../store/actions';
import './Tab3.css';

 const Tab3: React.FC = observer(() => {
  const [value, setValue] = useState(0)
  const number = useSelector(state => state.decrease.number)
  const dispatch = useDispatch();
  useEffect(() => {
    const ddd = window.location.href; 
    console.log(ddd)
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
    // const newValue = counter.count + 1;
    // counter.count = newValue;
    dispatch(decrease());
    // setValue(newValue)
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ion-text color="danger" style={{width: '100%', textAlign: 'center'}}>
          <IonButton style={{width: '100%', textAlign: 'center'}} onClick={onPress} title="Press"></IonButton>
          <h1>{number}</h1>
        </ion-text>
        
      </IonContent>
    </IonPage>
  );
});
export default Tab3;
