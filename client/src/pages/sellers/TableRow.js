const TableRow=(props)=>{
	return (
		<tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#2</td>
                    <td>Billi Cicero</td>
                    <td>bcicerol@wiley.com</td>
                    <td>+251 398198287</td>
                    {/* <td>Male</td>
                    <td>23</td>
                    <td>Afar</td> */}
                    {/* <td>North Gondar</td> */}
                    <td>Importer</td>
                    <td>Level1</td>
                    <td className="passive">
                        <span>Passive</span>
                    </td>
                    <td className="view">
                        <Link to='/viewSeller'>View</Link>
                    </td>
                    {/* <td >
                        <div className="editIcon" onClick={() => functio(this)}><EditIcon /></div>
                    </td> */}
                </tr>
	);
}

export default TableRow;