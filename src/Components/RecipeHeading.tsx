const RecipeHeading = (props: {title: string, description: string}) => {
  return (
    <div className='font-young-serif mt-10 mx-auto'>
        <h1 className='text-4xl text-DarkCharcoal mb-6 font-bold'>{props.title}</h1>
        <p className='font-outfit text-WengeBrown text-xs'>{props.description}</p>
    </div>
  )
}

export default RecipeHeading