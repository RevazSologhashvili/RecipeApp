
const PrepTime = (props: {total:string, preparation: string, cooking: string}) => {
  return (
    <div className='my-8 p-6 font-outfit bg-Snow rounded-xl'>
        <h3 className='text-2xl mb-4 text-DarkRaspberry font-bold'>Preparation time</h3>
        <ul className='text-WengeBrown list-disc list-outside m-4 marker:text-DarkRaspberry marker:text-sm marker:font-bold space-y-2'>
            <li className='ml-3 pl-4 text-xl'><strong className=''>Total</strong>: {props.total}</li>
            <li className='ml-3 pl-4 text-xl'><strong className=''>Preparation</strong>: {props.preparation}</li>
            <li className='ml-3 pl-4 text-xl'><strong className=''>Cooking</strong>: {props.cooking}</li>
        </ul>
    </div>
  )
}

export default PrepTime