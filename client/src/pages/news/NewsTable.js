import React from 'react'
import cookie from '../home/cookie.jpg'
import glass from '../home/glass.jpg'
import headPhone from '../home/headPhone.jpg'
import perfume from '../home/perfume.jpg'
import DeleteIcon from '@mui/icons-material/Delete';

const NewsTable = () => {
    return (
        <table>
            <thead>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td>ID</td>
                    <td>PHOTO</td>
                    <td>Title</td>
                    <td>Description</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#1</td>
                    <td>
                        <img src={cookie} alt="cookie" />
                    </td>
                    <td>Most purchased items</td>
                    <td>John products are the most purchased items</td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#2</td>
                    <td>
                        <img src={headPhone} alt="headphone" />
                    </td>
                    <td>Most purchased items</td>
                    <td>John products are the most purchased items</td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#3</td>
                    <td>
                        <img src={glass} alt="glass" />
                    </td>
                    <td>Most purchased items</td>
                    <td>John products are the most purchased items</td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#4</td>
                    <td>
                        <img src={perfume} alt="perfume" />
                    </td>
                    <td>Most purchased items</td>
                    <td>John products are the most purchased items</td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#5</td>
                    <td>
                        <img src={cookie} alt="cookie" />
                    </td>
                    <td>Most purchased items</td>
                    <td>John products are the most purchased items</td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#6</td>
                    <td>
                        <img src={cookie} alt="cookie" />
                    </td>
                    <td>Most purchased items</td>
                    <td>John products are the most purchased items</td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#7</td>
                    <td>
                        <img src={cookie} alt="cookie" />
                    </td>
                    <td>Most purchased items</td>
                    <td>John products are the most purchased items</td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#8</td>
                    <td>
                        <img src={cookie} alt="cookie" />
                    </td>
                    <td>Most purchased items</td>
                    <td>John products are the most purchased items</td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#9</td>
                    <td>
                        <img src={cookie} alt="cookie" />
                    </td>
                    <td>Most purchased items</td>
                    <td>John products are the most purchased items</td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="check" />
                        <label htmlFor="check"></label>
                    </td>
                    <td className='id'>#10</td>
                    <td>
                        <img src={cookie} alt="cookie" />
                    </td>
                    <td>Most purchased items</td>
                    <td>John products are the most purchased items</td>
                    <td>
                        <div className="deleteIcon"><DeleteIcon /></div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default NewsTable