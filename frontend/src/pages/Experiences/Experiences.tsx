import ActivityCard from './components/ActivityCard';
import { ActivityCardProps } from './components/ActivityCard';

const coffee: ActivityCardProps = {
  src: 'LV-coffee.jpg',
  alt: 'LV coffee',
  title: 'Café Maxime Frédéric',
  address: '51 avenue des Champs Élysés',
  discount: '10% de réduction sur la commande',
};

const walkaround: ActivityCardProps = {
  src: 'LV-bg.jpg',
  alt: 'LV shop',
  title: 'Balade autour de la boutique',
  address: '101 avenue des Champs Élysés',
  discount: "Un bon bol d'air frais",
};

const activitiesList: ActivityCardProps[] = [coffee, walkaround];

const Experiences = () => {
  return (
    <div className='bg-white h-screen flex justify-center items-center flex-col'>
      Experiences
      <div className='flex gap-5 flex-wrap'>
        {activitiesList.map((activity) => (
          <ActivityCard {...activity} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
