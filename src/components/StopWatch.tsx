import * as React from 'react';
import './StopWatch.css';


export interface Props {
  start: number
}

class StopWatch extends React.Component <Props , object> {
  public state :any= { 
    secondsETasksed: this.props.start, 
    tasks: [],
    name,
    lastClearedIncrementer: null,
    value: '',
    values: []
  };
  public incrementer:any = null;
  public handleStartClick=()=> {
    this.incrementer = setInterval( () =>
      this.setState({
        secondsETasksed: this.state.secondsETasksed + 1
      })
    , 1000);
  }
  
  public handleStopClick=()=> {
      clearInterval(this.incrementer);
      this.setState({
        lastClearedIncrementer: this.incrementer
      });  
  }
    
  public handleTaskClick=(e:any)=> {
    if(this.state.value!==''){
  
    this.setState({
      tasks: this.state.tasks.concat([{Task:this.state.secondsETasksed, value:this.state.value}]),
      value: '',
      secondsETasksed:0
    })
   e.preventDefault();
  }else{
    alert('please enter a vlaue')
  }
  }
  public handleChange = (event:any) => {
    this.setState({
      value: event.target.value
    });
  }
  
 public render() {
    return (
      <div className="stopwatch">
        <h1 className="stopwatch-timer">{formattedSeconds(this.state.secondsETasksed)}</h1>

        {(this.state.secondsETasksed === 0 ||
          this.incrementer === this.state.lastClearedIncrementer
          ? <Button className="start-btn" onClick={this.handleStartClick}>start</Button>
          : <Button className="stop-btn" onClick={this.handleStopClick}>stop</Button>
        )}
        
  {(this.state.secondsETasksed !== 0 &&
          this.incrementer === this.state.lastClearedIncrementer
          ? <div><input placeholder="Enter Your Task" type="text" value={this.state.value} onChange={this.handleChange} /> <Button onClick={this.handleTaskClick}>Save</Button></div>
          : null
        )}
        <ul className="stopwatch-Tasks">
          { this.state.tasks.map((task:any, i:any) =>
              <li className="stopwatch-Task" key={i}>
              <strong>{i + 1}</strong>Time Taken:{formattedSeconds(task.Task)} <b>Task Description:{task.value.trim()}</b></li>)
          }
        </ul>
      </div>
    );
  }
}

export default StopWatch;

const Button = (props:any) =>
  <button type="button" {...props} className={"btn " + props.className } />;
  const formattedSeconds = (sec:any) =>
  Math.floor(sec / 60) +
    ':' +
  ('0' + sec % 60).slice(-2)