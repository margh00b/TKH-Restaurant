const Button = ({btnText}:{btnText:string}) => {
    return (
    <button className="place-self-center bg-orange-500 text-white text-sm py-1 px-4 rounded hover:bg-orange-600">
        {btnText}
    </button>
    );
};
export default Button;