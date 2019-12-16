//create property with callback
class LoggingButton extends React.Component{
    handleClick: () => {
        console.log('event handling');
    }

    render(){
        return  (
            <button onClick={this.handleClick}>Click Me</button>
        )
    }
}

// bind direct
class LoggingButton extends React.Component{
    handleClick() {
        console.log('event handling');
    }

    render(){
        return  (
            <button onClick={this.handleClick.bind(this)}>Click Me</button>
        )
    }
}

// bind in constructor
class LoggingButton extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('event handling');
    }

    render(){
        return  (
            <button onClick={this.handleClick}>Click Me</button>
        )
    }
}

// point direct to the callback
class LoggingButton extends React.Component{
    handleClick() {
        console.log('event handling');
    }

    render(){
        return  (
            <button onClick={(e) => this.handleClick(e)}>Click Me</button>
        )
    }
}