import React from 'react';
import App from './app';

class Input extends React.Component {
    constructor(props)  {
    super(props);

        this.state={
            checked:false
        }

        this.dateExpand = this.dateExpand.bind(this);
        this.magExpand - this.magExpand.bind(this);
    }

    componentDidMount(){
        let date = document.getElementById('dateParams');
        let mag = document.getElementById('magParams');
        let sort = document.getElementById('sortParams');

        date.style.display = 'none';
        mag.style.display = 'none'; 
        sort.style.display = 'none';
    }

    dateExpand() {
        let date = document.getElementById('dateParams');
        date.style.display === 'none' ? date.style.display = 'block': date.style.display = 'none';
    }

    magExpand() {
        let mag = document.getElementById('magParams');
        mag.style.display === 'none' ? mag.style.display = 'block' : mag.style.display = 'none';
    }

    sortExpand() {
        let sort = document.getElementById('sortParams');
        sort.style.display === 'none' ? sort.style.display = 'block' : sort.style.display = 'none';
    }
  
      render(){

        return(
                    <div id='parent-element'>

{/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~row + start/end date params~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
                    <a id='dateBox' href='#' onClick={this.dateExpand}>Set Date Range</a>

                    <div id='dateParams' >
                    {/* <div className='text-center' id='date-title' display='none'><h4>List Seismic Events Between: </h4> */}
                        {/* <div className='text-center'><p><i>Enter date in YYYY-MM-DD format</i></p></div> */}
                    
                    <div className='row' >
                        <div className='col-md-5' >
                            <label htmlFor='startDate' >Start Date:</label><br/>
                            <input type='date' id='startDate' name='startDate' onChange={this.props.onChange} value={this.props.startDate} placeholder='YYYY-MM-DD'/>
                        </div>

                        <div className='col-md-2' id='spacer' ></div>

                        <div className='col-md-5' >
                            <label htmlFor='endDate' >End Date:</label><br/>
                            <input type='date' id='endDate' name='endDate' onChange={this.props.onChange} value={this.props.endDate} placeholder='YYYY-MM-DD'/>
                        </div>

                    </div> {/*close date params row*/}
                    </div>
                    <hr className='style8' />
{/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~minMagnitude dropdown + row for min/maxMag~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
                     <a id='magBox' href='#' onClick={this.magExpand}>Set Magnitude Range</a>
                    
                    <div id='magParams' >
                    {/* <div className='text-center' id='mag-title' ><h4>List Seismic Events Between Magnitudes: </h4></div> */}

                    <div className='row' >
                        <div className='col-md-5' >
                        <label htmlFor='minMag' >Minimum Magnitude</label><br/>
                        <select className = 'dropdown' 
                                id='minMag' 
                                name='minMagnitude' 
                                // defaultvalue='minmagnitude=1'
                                onChange={this.props.onChange} >   
                                    <option value='minmagnitude=0' > 0</option>
                                    <option value='minmagnitude=1' > 1</option>
                                    <option value='minmagnitude=2' > 2</option>
                                    <option value='minmagnitude=3' > 3</option>
                                    <option value='minmagnitude=4' > 4</option>
                                    <option value='minmagnitude=5' > 5</option>
                                    <option value='minmagnitude=6' > 6</option>
                        </select>
                        </div>

                        <div className='col-md-2' id='spacer' ></div>

{/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~maxMagnitude~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

                        <div className='col-md-5' >
                        <label htmlFor='maxMag' >Maximum Magnitude</label><br/>
                        <select className = 'dropdown' 
                                id='maxMag' 
                                name='maxMagnitude' 
                                // value={this.props.maxMag} 
                                onChange={this.props.onChange} >   
                                   <option value='maxmagnitude=0' > 0</option>
                                   <option value='maxmagnitude=1' > 1</option>
                                   <option value='maxmagnitude=2' > 2</option>
                                   <option value='maxmagnitude=3' > 3</option>
                                   <option value='maxmagnitude=4' > 4</option>
                                   <option value='maxmagnitude=5' > 5</option>
                                   <option value='maxmagnitude=6' > 6</option>
                        </select>
                        </div>
                    </div> {/*close div=row*/}
                    </div>
                    <hr className='style8' />
{/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~props.sort dropdown~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
                        <a id='sortBox' href='#' onClick={this.sortExpand}>Set Sorting Parameters</a>

                        <div id='sortParams' >
                        <div className='row' >
                       
                        <div className='col-md-5' >
                        <label htmlFor='listReturn' ># of Events to Return:</label>
                        <input id='listReturn' type='number' onChange={ this.props.onChange } name= 'listReturn' value={ this.props.listReturn } /><br />
                        </div>

                        <div className='col-md-2' id='spacer' ></div>

                        <div className='col-md-5' >
                        <label className='' htmlFor='sort'>Sort By:</label><br/>
                        <select className = 'dropdown' 
                                id='sortOrder' 
                                name='sort' 
                                value={this.props.sort} 
                                onChange={this.props.onChange} >   
                                    <option value='orderby=time' > Most Recent </option>
                                    <option value='orderby=time-asc' > Inverse Time  </option>                               
                                    <option value='orderby=magnitude' > Magnitude </option>
                                    <option value='orderby=magnitude-asc' > Inverse Magnitude </option>

                        </select><br/>
                        </div>
                        </div>
                        </div><br/>

{/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Apply Filters Button~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

                      <div className='card-footer'>  <button className='btn btn-success btn-danger' onClick={this.props.onClick}>Apply Filters</button><br/></div>
                    
                    </div> //close div id=parent-element
                    
                    

        )
      }
    }

    export default Input;