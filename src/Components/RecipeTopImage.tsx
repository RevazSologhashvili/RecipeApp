
const RecipeTopImage = (props: {source: string}) => {
  return (
    <img src={props.source} width={'100%'} height={'auto'} alt="Heading image of food" className="w-screen md:max-w-[1440px] rounded-b-xl mx-auto md:mt-8 md:rounded-2xl"/>
  )
}

export default RecipeTopImage