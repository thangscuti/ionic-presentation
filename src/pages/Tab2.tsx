import { IonContent, IonHeader, IonInput, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { observer } from 'mobx-react-lite';
import { useSelector } from 'react-redux';
import ExploreContainer from '../components/ExploreContainer';
import { counter } from '../store/Counter';
import './Tab2.css';

const Tab2: React.FC = observer(() => {
  const number = useSelector(state => state.decrease.number)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonInput value="custom"></IonInput>
        <IonText color="danger" style={{width: '100%', textAlign: 'center'}}>
          <h1>{number}</h1>
        </IonText>
      </IonContent>
    </IonPage>
  );
});

export default Tab2;
