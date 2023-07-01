import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Nourriture délicieuse, livrée chez vous</h2>
      <p>
      Choisissez votre plat préféré parmi notre large sélection de plats disponibles
        et profitez d'un délicieux déjeuner ou dîner à la maison.
      </p>
      <p>
      Tous nos repas sont cuisinés avec des ingrédients de haute qualité, juste à temps et
        bien sûr par des chefs expérimentés !
      </p>
    </section>
  );
};

export default MealsSummary;