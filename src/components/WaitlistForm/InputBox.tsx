interface IInputBox {
    title: string;
    name: string;
    type?: string;
    maxLength?: number | undefined;
}

const InputBox = ({
    title,
    name,
    type = 'text',
    maxLength,
}: IInputBox) => {
    return (
        <div className="flex flex-col sm:flex-row">
            <h3 className="mb-2 mr-10 text-2xl sm:text-2xl font-bold tracking-tight dark:text-slate-50 text-slate-900 capitalize">{title}</h3>
            <input type={type} name={name} maxLength={maxLength}/>
        </div>
    )
};

export default InputBox;