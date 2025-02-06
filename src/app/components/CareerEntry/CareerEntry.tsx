import './CareerEntry.scss';

import { CareerEntryItem, CareerEntryType } from '../../../data/career';
import RichDescription from '../RichDescription/RichDescription';

interface CareerEntryProps {
    careerEntry?: CareerEntryItem;
    showDate?: boolean
}

function CareerEntry({ showDate = false, careerEntry }: CareerEntryProps) {
    if (!careerEntry) return null;

    return (
        <div className="container-component-career-entry">
            {showDate && (<div className="display-career-item-date-mobile">{new Date(careerEntry.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</div>)}
            <div className="display-career-item-title">
                {(() => {
                    switch (careerEntry.type) {
                        case CareerEntryType.EVENT:
                            return (<span className="fa fa-fw fa-calendar" title={CareerEntryType.EVENT}></span>);
                        case CareerEntryType.POSITION:
                            return (<span className="fa fa-fw fa-briefcase" title={CareerEntryType.POSITION}></span>);
                        case CareerEntryType.CERTIFICATION:
                            return (<span className="fa fa-fw fa-certificate" title={CareerEntryType.CERTIFICATION}></span>);
                    }
                })()}
                
                <span>{careerEntry.title}</span>
            </div>

            {(careerEntry.company || careerEntry.location) && (
                <div className="display-career-item-where">
                    {careerEntry.company && (
                        careerEntry.link ? (
                            <div className="display-career-item-company">
                                <a href={careerEntry.link} target="_blank" rel="noopener noreferrer">
                                    <span className="fa fa-fw fa-building"></span>
                                    <span>{careerEntry.company}</span>
                                </a>
                            </div>
                        ) : (
                            <div className="display-career-item-company">
                                <span className="fa fa-fw fa-building"></span>
                                <span>{careerEntry.company}</span>
                            </div>
                        )
                    )}
                    {careerEntry.location && (
                        <div className="display-career-item-location">
                            <span className="fa fa-fw fa-map-marker"></span>
                            <span>{careerEntry.location}</span>
                        </div>
                    )}
                </div>
            )}

            {careerEntry.description && (
                <RichDescription description={careerEntry.description} />
            )}
        </div>
    );
}

export default CareerEntry