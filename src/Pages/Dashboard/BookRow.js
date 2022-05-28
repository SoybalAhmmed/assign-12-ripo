import React from 'react';
import { toast } from 'react-toastify';

const BookRow = ({book,index,refetch,setDeletingBook}) => {
    const { bookname, price, img,email } = book;

    
        
       
    return (
        <tr>
        <th>{index + 1}</th>
        <td><div class="avatar">
            <div class="w-8 rounded">
                <img src={img} alt={bookname} />
            </div>
        </div></td>
        <td>{bookname}</td>
        <td>{price}</td>
        <td>
        <label onClick={() => setDeletingBook(book)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>        </td>
    </tr>
    );
};

export default BookRow;