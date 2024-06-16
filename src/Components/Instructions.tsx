interface Instruction {
    instruction: string;
    description: string;
}

const Instructions = (props: { instructionSet: Instruction[] }) => {
    return (
        <div>
            <h2 className="font-young-serif text-BrandyRed text-3xl font-bold mb-6">Instructions</h2>
            <ul className="list-outside list-decimal ml-6 marker:text-BrandyRed marker:font-bold text-WengeBrown font-outfit space-y-2">
                {props.instructionSet.map((item, index) => (
                    <li key={index} className="pl-4">
                        <strong>{item.instruction}</strong>: {item.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Instructions;
