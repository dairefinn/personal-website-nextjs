import './CareerEntrySmall.scss';

import { CareerEntryItem, CareerEntryType } from '../../../data/career';
import RichDescription from '../RichDescription/RichDescription';

interface CareerEntrySmallProps {
    careerEntry?: CareerEntryItem;
}

function CareerEntrySmall({ careerEntry }: CareerEntrySmallProps) {
    if(!careerEntry) return null;

    return (
        <div className="container-component-career-entry">
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
                
                <span>&nbsp;{careerEntry.title}</span>
                {careerEntry.company && (
                    <>
                        <span>,&nbsp;</span>
                        <span className="display-career-item-company">
                            <span>{careerEntry.company}</span>
                        </span>
                    </>
                )}

                {careerEntry.location && (
                    <>
                        <span>,&nbsp;</span>
                        <div className="display-career-item-location">
                            <span>{careerEntry.location}</span>
                        </div>
                    </>
                )}
            </div>

            <div className="display-career-item-date">
                <span>{new Date(careerEntry.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                {(careerEntry.endDate === undefined) ? (
                    <span> - Present</span>
                ) : (careerEntry.endDate === null) ? (
                    // <!-- Doesn't have an end date -->
                    null
                ) : (
                    <span> - {new Date(careerEntry.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                )}
            </div>

            {careerEntry.description && (
                <RichDescription description={careerEntry.description} />
            )}
        </div>
    );
}

export default CareerEntrySmall