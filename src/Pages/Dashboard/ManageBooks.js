import React, { useState } from 'react';
import DeleteConfirmModal from './DeleteConfirmModal';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookRow from './BookRow';

const ManageBooks = () => {
    const [deletingBook, setDeletingBook] = useState(null);

    const { data: books, isLoading, refetch } = useQuery('books', () => fetch('http://localhost:5000/book', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">Manage Books: {books.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map((book, index) => <BookRow
                                key={book._key}
                                book={book}
                                index={index}
                                refetch={refetch}
                                setDeletingBook={setDeletingBook}
                            ></BookRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingBook && <DeleteConfirmModal
                deletingBook={deletingBook}
                refetch={refetch}
                setDeletingBook={setDeletingBook}
            ></DeleteConfirmModal>}
        </div>
    );
};

export default ManageBooks;