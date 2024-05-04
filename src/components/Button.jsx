const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, borderRadius, fullWidth, link}) => {
    return (
        <a target={"_blank"} href={ link?link:"https://teenlancer.funngro.com/pages/register/"}
            className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat font-bold text-base leading-none shadow-3xl hover:shadow-red-300 transition-all max-w-[200px]
            ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor} ${borderRadius}` : 'bg-coral-red text-white border-coral-red rounded-[4px]'} 
            ${fullWidth && 'w-full'}'`}>
            {label}

            {iconURL && <img
                src={iconURL}
                alt="arrow right icon"
                className="ml-2 rounded-sm w-5 h-5"
            />}
        </a>
    )
}

export default Button;
