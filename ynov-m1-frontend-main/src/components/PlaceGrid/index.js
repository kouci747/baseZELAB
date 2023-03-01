import PlaceCard from "../PlaceCard";
import styles from "./index.module.scss";

const Index = ({ places }) => {
  
  return (
    <div className={styles.grid}>
      {
        places && places.map((item) => (
          <PlaceCard key={item.id} place={item} />
        ))
      }
    </div>
  );
}

export default Index;
