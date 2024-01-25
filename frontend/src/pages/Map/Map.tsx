import ActivityCard, {
  ActivityCardProps,
} from "../Experiences/components/ActivityCard";

const coffee: ActivityCardProps = {
  src: "../../LV-coffee.jpg",
  alt: "LV coffee",
  title: "Café Maxime Frédéric",
  address: "2 rue du Pont Neuf",
  discount: "10% de réduction sur la commande",
};

const walkaround: ActivityCardProps = {
  src: "../../LV-bg.jpg",
  alt: "LV shop",
  title: "Balade autour de la boutique",
  address: "101 avenue des Champs Élysés",
  discount: "Un bon bol d'air frais",
};

const macarons: ActivityCardProps = {
  src: "../../laduree.jpg",
  alt: "La durée",
  title: "La durée",
  address: "75 avenue des Champs Élysés",
  discount: "Un macaron offert",
};

const dior: ActivityCardProps = {
  src: "../../dior.jpg",
  alt: "Dior",
  title: "Galerie Dior",
  address: "30 avenue Montaigne",
  discount: "Nouvelle exposition Dior jusqu'au 23 avril",
  redirect: "/dior",
};

const arc: ActivityCardProps = {
  src: "../../arc-triomphe.jpg",
  alt: "Arc de triomphe",
  title: "Arc de Triomphe",
  address: "Place Charles de Gaulle",
  discount: "C'est toujours beau à voir.",
};

const ary: ActivityCardProps = {
  src: "../../aryjan.jpg",
  alt: "Ary Jan",
  title: "Galerie Ary Jan",
  address: "32 avenue Marceau",
  discount: "Exposition Cartier",
};

const activitiesList: ActivityCardProps[] = [
  coffee,
  walkaround,
  macarons,
  dior,
  arc,
  ary,
];

const Map = () => {
  return (
    <div className="py-16 h-svh flex-col gap-3 flex">
      <div className="h-[50%] overflow-auto touch-auto">
        <img
          src="../../map.png"
          alt="map"
          className="w-[300%] max-w-none h-auto"
        />
      </div>
      <div className="flex overflow-auto gap-5 px-2">
        {activitiesList.map((activity, index) => (
          <ActivityCard {...activity} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Map;
