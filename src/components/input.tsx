import * as React from 'react';

export interface Props{
value: any
}
export default class Input extends React.Component <Props, object> {
    public state:any = {
        value: ''
    }

public handleChange(event:any) {
    this.setState({value: event.target.value});
  }

  public handleSubmit(event:any) {
    event.preventDefault();
  }

 public render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

