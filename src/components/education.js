import React from 'react';

class Education extends React.Component {
   constructor() {
      super();
		
      this.state = {
         data:[
            {
               
               id: 1, DEGREE: 'MCA', UNIVERSITY:'GAUHATI UNIVERSITY', INSTITUTION: 'ASSAM ENGINEERING COLLEGE', YEAR:'2018', RESULT: '64.25%'
            },
            {
               id: 2, DEGREE: 'BCA', UNIVERSITY:'GAUHATI UNIVERSITY', INSTITUTION: 'ASIAN INSTITUTE OF MANAGEMENT & TECH', YEAR:'2014',RESULT: '57.83%'
            },
            {
               id: 3, DEGREE: 'HS', UNIVERSITY:'AHSEC', INSTITUTION: 'B BOROOAH COLLEGE', YEAR:'2011', RESULT:'49.8%'
            },
             {
               id: 4, DEGREE: 'HSLC', UNIVERSITY:'SEBA', INSTITUTION: 'KARATIPAR HIGH SCHOOL', YEAR:'2008',RESULT:'68.67%'
            }
         ]
      }
   }
   render() {
      return (
         <div>
        	<h1 className="new_head">EDUCATION QUALIFICATION</h1>
        	
        	<table cellspadding={20} cellSpacing={0} className='teble-t-l'>
        		<thead>
        		<tr>
        			<th className="td-data">DEGREE</th>
        			<th className="td-data">INSTITUTION/COLLEGE/SCHOOL</th>
        			<th className="td-data">UNIVERSITY/COUNCIL/BOARD</th>
        			<th className="td-data">YEAR OF PASSING</th>
        			<th className="td-data">RESULT Percentage/Grade</th>
        		</tr>
        		</thead>
        		<tbody>
               {this.state.data.map((dynamicComponent, i) => <Content key = {i} componentData = { dynamicComponent } />)}
            </tbody>
        	</table>

        	
        </div>
      );
   }
}
class Content extends React.Component {
   render() {
      return (
          
        		<tr>
        			<td className="td-data">{this.props.componentData.DEGREE}</td>
        			<td className="td-data">{this.props.componentData.UNIVERSITY}</td>
        			<td className="td-data">{this.props.componentData.INSTITUTION}</td>
        			<td className='center td-data'>{this.props.componentData.YEAR}</td>
        			<td className='center td-data'>{this.props.componentData.RESULT}</td>
        		</tr>
        		
      );
   }
}
export default Education;