class NameForm extends React.Component {
    constructor(props){
        super(props);
        this.state = { value: '' };
    }

    handleChange: (event) => {
        this.setState({value: event.target.value});
    }

    render(){
        return (
            <input onChange={this.handleChange} value={this.state.value}/>
        )
    }
}

const NameForm = () => {
    const [ value, setValue ] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    return (
        <input onChange={handleChange} value={value}/>
    )
}