
const Ingredients = (props: { ingredients: string[] }) => {
    return (
        <div className="">
            <h2 className="font-young-serif text-BrandyRed text-3xl font-bold mb-6">Ingredients</h2>
            <ul className=" list-outside list-disc marker:text-BrandyRed marker:text-sm marker:font-bold space-y-2 font-bold font-outfit">
                {props.ingredients.map((item, index) => (
                    <li className="ml-7 pl-5 text-xl text-WengeBrown font-medium" key={index}>{item}</li>
                ))}

            </ul>
        </div>
    )
}

export default Ingredients