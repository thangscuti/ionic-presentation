import { IonContent, IonHeader, IonInput, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState} from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  const [value, setValue] = useState('0')
  useEffect(() => {
    let session;
    navigator.presentation.onpresent = function (event) {
      if (!session) {
        session = event.session;
        session.onmessage = function(msg){
          setValue(msg)
        }
      }
    };

   
  }, [])
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
          <h1>{value}</h1>
        </ion-text>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
