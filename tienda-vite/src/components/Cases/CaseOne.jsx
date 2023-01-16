export default function CaseOne() {
    const [option, setOption] = useState(1);

    function optionSelected(value) {
        setOption(value);
    }

    return (
        <>
            {option == 1 ?
                <img src="" alt="foto" />
                :
                <img src="" alt="foto" />  
            }

            <Select 
                options= {options}
                onSelect={optionSelected}
                defaultOption={option} 
            />
        </>
    );
} 