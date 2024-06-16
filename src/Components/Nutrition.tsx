const Nutrition = (props: { Calories: number, Carbs: number, Protein: number, Fat: number }) => {
    return (
        <div className="mb-10 relative">
            <h2 className="font-young-serif text-BrandyRed text-3xl font-bold">Nutrition</h2>
            <p className="font-outfit text-WengeBrown text-sm my-6">The table below shows nutritional values per serving without the additional fillings.</p>

            <div className="flex flex-col gap-3 font-bold">
                <div className="flex   ml-20"><span className="w-1/2 text-WengeBrown">Calories</span> <span className="text-BrandyRed">{props.Calories}kcal</span></div>
                <hr className="w-full"/>
                <div className="flex   ml-20"><span className="w-1/2 text-WengeBrown">Carbs</span> <span className="text-BrandyRed">{props.Carbs}g</span></div>
                <hr className="w-full"/>
                <div className="flex   ml-20"><span className="w-1/2 text-WengeBrown">Protein</span> <span className="text-BrandyRed">{props.Protein}g</span></div>
                <hr className="w-full"/>
                <div className="flex   ml-20"><span className="w-1/2 text-WengeBrown">Fat</span> <span className="text-BrandyRed">{props.Fat}g</span></div>
                <hr className="w-full"/>
            </div>
        </div>
    )
}

export default Nutrition;
