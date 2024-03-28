import { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa6";

const ArrivalBooks = () => {
    const [arrivedBooks, setArrivedBooks] = useState([])
    useEffect(() => {
        fetch('newArrivalBooksData.json')
            .then(res => res.json())
            .then(data => setArrivedBooks(data))
    }, [])

    return (
        <div className="mb-10">
            <div className=' grid grid-cols-1 lg:grid-cols-3 place-items-center gap-y-4'>
                {
                    arrivedBooks.map(book =>
                        <div key={book.totalPages} className='w-[360px] h-[480px] p-6 books-card' >
                            <div className='w-[320px] h-[230px] books-bg'>
                                <img className='h-[180px]' src={book.image} alt="" />
                            </div>
                            <div className='flex gap-x-6 text-purple-700 font-bold pt-5' >
                                {
                                    book.tags.map((tag, idx) => <p key={idx}> {tag}</p>)
                                }
                            </div>
                            <h3 className='font-bold text-xl py-3'>{book.bookName}</h3>
                            <p className='text-gray-600'>By. {book.author}</p>
                            <div className='flex justify-between text-[rgba(19, 19, 19, 0.8)] pt-9'>
                                <p  >{book.category}</p>
                                <div className='flex items-center gap-x-2'>
                                    <FaRegStar />
                                    <p>  {book.rating}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ArrivalBooks;