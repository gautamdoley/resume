import React from 'react'

class Personal extends React.Component{
  render(){
    return (
        <div>
        	<h1 className="new_head">PERSONAL DETAILS</h1>
        	<table cellSpacing={10} cellPadding={0} className="pTable" >
        	<tbody>
        		<tr>
        			<th className="al">
        				Full Name
        			</th>
        			<td>
        				Gautam Doley
        			</td>
        		</tr>
        		<tr>
        			<th className="al">
        				Father Name
        			</th>
        			<td>
        				Basaram Doley
        			</td>
        		</tr>
        		<tr>
        			<th className="al">
        				Date of Birth
        			</th>
        			<td>
        				1st March, 1993
        			</td>
        		</tr>
        		<tr>
        			<th className="al">
        				Gender
        			</th>
        			<td>
        				Male
        			</td>
        		</tr>
        		<tr>
        			<th className="al">
        				Hobbies
        			</th>
        			<td>
        				Playing, Listening Music.
        			</td>
        		</tr>
        		<tr>
        			<th className="al">
        				Language known
        			</th>
        			<td>
        				English, Hindi, Assamese, Mishing.
        			</td>
        		</tr>
        		<tr>
        			<th className="al">
        				Permanent Address
        			</th>
        			<td>
        				Vill-Charigharia, PO-Karatipar, Majuli, Assam PIN-785104
        			</td>
        		</tr>
        	</tbody>
        	</table>
        </div>
      );
  }
  
}
export default Personal;
