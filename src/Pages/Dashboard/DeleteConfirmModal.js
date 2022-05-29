import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({deletingBook, refetch, setDeletingBook}) => {
    const {bookname, email} = deletingBook;
    
    const handleDelete = () => {
        fetch(`https://murmuring-atoll-76800.herokuapp.com/book/${email}`,{
            method: 'DELETE',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    
                })
                .then(res =>res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount){
                        toast.success(`Book: ${bookname} is deleted`)
                        setDeletingBook();
                        refetch();
                    }
                })
        }

    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal"  className="modal-toggle" />
            <div  className="modal modal-bottom sm:modal-middle">
                <div  className="modal-box">
                    <h3  className="font-bold text-lg text-red-500">Are you sure you want to delete  ${bookname}!</h3>
                    <p  className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div  className="modal-action">
                    <button onClick={() => handleDelete()}  className="btn btn-xs btn-error">Delete</button>
                        <label htmlFor="delete-confirm-modal"  className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;