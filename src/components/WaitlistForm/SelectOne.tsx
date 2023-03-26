import { useState } from "react";

interface ISelectOne {
    title: string;
    options: Array<any>;
    name: string;
    value: string | undefined;
    onChange: (val: string) => void;
}

const SelectOne = ({
    title,
    options,
    name,
    value,
    onChange,
}: ISelectOne) => {
    const [selectedValue, updateSelectedValue] = useState<string | undefined>(value);

    const onOptionChange = (val: string) => {
        updateSelectedValue(val)
        onChange(val);
    }

    return (
        <>
            <h3 className="tracking-tight dark:text-slate-50 text-slate-900 capitalize">{title}</h3>
            <div
                className="flex gap-x-4 max-sm:flex-col max-sm:gap-y-4"
            >
                {
                    options.map(({
                        value: val,
                        id,
                    }) => (
                        <div
                            key={id} 
                            className={`cursor-pointer border-solid border-0 bg-white/5 px-3.5 py-2 ring-inset ${selectedValue === val ? 'ring-2 ring-sky-500 dark:ring-sky-500 bg-sky-400/5': 'dark:ring-gray-600 ring-gray-400 ring-1'} rounded-md`}
                            onClick={() => onOptionChange(val)}
                        >
                            <input
                                type="radio"
                                name={name}
                                value={val}
                                onChange={e => e.stopPropagation()}
                                id={id}
                                checked={selectedValue === val}
                                className="appearance-none"
                            />
                            <label
                                htmlFor={id}
                                className={`cursor-pointer font-normal ${selectedValue === val ? 'text-sky-500' : 'text-gray-400'}`}
                            >
                                {val}
                            </label>
                        </div>
                    ))
                }

            </div>
        </>
    );
};

export default SelectOne;