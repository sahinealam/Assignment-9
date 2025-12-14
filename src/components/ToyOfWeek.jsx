import React from 'react';

const ToyOfWeek = () => {
    return (
        <div>
             <section className='bg-green-100 py-12 px-6 text-center rounded-2xl'>
                <h2 className="text-3xl font-bold text-green-700 mb-4">Toy of the Week</h2>


                <p className="text-gray-700 max-w-xl mx-auto mb-8">
          This week's star is <span className="font-semibold">Toy Paia</span> —
          a fun and colorful toy loved by kids for its playful design and joyful
          vibes. Perfect for learning and entertainment!
        </p>
                <img
                    className="mx-auto w-80 h-60 object-cover rounded-xl shadow-lg"
                    src="https://storio.in/cdn/shop/files/419j_9HBzFL.jpg?v=1712374499"
                    alt="Pangoin Toy"
                />

            </section>
        </div>
    );
};

export default ToyOfWeek;