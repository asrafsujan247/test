import React from 'react';
import AgentsSidebar from '../sidebar/AgentsSidebar';
import AboutAgent from './AboutAgent';
import MyListings from '../listings/MyListings';
import Reviews from '../review/Review';
import AddReview from '../review/AddReview';



const AgentSingleBody: React.FC = () => {
  return (
    <section className="pt-14 pb-20 md:pb-32">
        <div className="container">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 lg:col-span-4">
                    <AgentsSidebar />
                </div>
                <div className="col-span-12 lg:col-span-8">
                    <AboutAgent />
                    <MyListings />
                    <Reviews />
                    <AddReview />
                </div>
            </div>
        </div>
    </section>
  )
}

export default AgentSingleBody