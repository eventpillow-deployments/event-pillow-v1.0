import { useState } from "react";

interface ISelectOne {
    title: string;
    options: Array<any>;
    name: string;
    defaultValue: string | undefined;
}

const SelectOne = ({
    title,
    options,
    name,
    defaultValue,
}: ISelectOne) => {
    const [selectedValue, updateSelectedValue] = useState<string | undefined>(defaultValue);

    const onOptionChange = (value: string) => {
        updateSelectedValue(value)
    }

    return (
        <>
            <h3 className="tracking-tight dark:text-slate-50 text-slate-900 capitalize">{title}</h3>
            <div
                className="flex gap-x-4 max-sm:flex-col max-sm:gap-y-4"
            >
                {
                    options.map(({
                        value,
                        id,
                    }) => (
                        <div
                            key={id} 
                            className={`cursor-pointer border-solid border-0 bg-white/5 px-3.5 py-2 ring-inset ring-white/10 ${selectedValue === value ? 'ring-2 ring-sky-500 bg-sky-400/5': 'dark:ring-gray-600 ring-gray-400 ring-1'} rounded-md`}
                            onClick={() => onOptionChange(value)}
                        >
                            <input
                                type="radio"
                                name={name}
                                value={value}
                                id={id}
                                checked={selectedValue === value}
                                className="appearance-none"
                            />
                            <label
                                htmlFor={id}
                                className={`cursor-pointer font-normal ${selectedValue === value ? 'text-sky-500' : 'text-gray-400'}`}
                            >
                                {value}
                            </label>
                        </div>
                    ))
                }

            </div>
        </>
    );
};

export default SelectOne;