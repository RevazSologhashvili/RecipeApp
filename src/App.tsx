import Ingredients from "./Components/Ingredients"
import Instructions from "./Components/Instructions"
import Nutrition from "./Components/Nutrition"
import PrepTime from "./Components/PrepTime"
import RecipeHeading from "./Components/RecipeHeading"
import RecipeTopImage from "./Components/RecipeTopImage"


function App() {

  return (
    <>
      {/* Recipe heading image */}
      <RecipeTopImage source={"/image-omelette.jpeg"} />
      <main className="mx-6 max-w-[1440px] lg:mx-auto md:mx-12">
        {/* Recipe name and description */}
        <RecipeHeading
          title="Simple Omelette Recipe"
          description="An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats." />
        {/* Compenent to show Preparation times*/}

        <PrepTime
          total="Approximately 10 minutes"
          preparation="5 minutes"
          cooking="5 minutes" />

        {/* Ingredient compent, takes array of string as ingredients */}
        <Ingredients
          ingredients={['2-3 large eggs', 'Salt, to taste', 'Pepper, to taste', '1 tablespoon of butter or oil', 'Optional fillings: cheese, diced vegetables, cooked meats, herbs']} />

        {/*simple separator line */}
        <hr className="my-8" />

        {/* Sets of instructions takes array of objects {instruction: Bold part of instruction,  description: instrcution's description} */}
        <Instructions instructionSet={[
          { instruction: "Beat the eggs", description: 'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.' },
          { instruction: "Heat the pan", description: "Place a non-stick frying pan over medium heat and add butter or oil." },
          { instruction: "Cook the omelette", description: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface." },
          { instruction: "Add fillings (optional)", description: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette." },
          { instruction: "Fold and serve", description: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate." },
          { instruction: "Enjoy", description: "Serve hot, with additional salt and pepper if needed." }]} />

        {/*simple separator line */}
        <hr className="my-8" />
        
        {/* Nutriton Component  takes Calories, Carbs, Protein and Fat props */}
        <Nutrition Calories={120} Carbs={20} Protein={6} Fat={11} />

      </main>
    </>

  )
}

export default App
