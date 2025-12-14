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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHPXxrpa4hzMgJrRDD6dZLXl7wec7C9d6fJQ&s"
                    alt="Peace Lily"
                />

            </section>
        </div>
    );
};

export default ToyOfWeek;