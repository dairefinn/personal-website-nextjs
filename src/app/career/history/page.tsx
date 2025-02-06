import './CareerHistory.scss';

import { careerEntries, CareerEntryType } from '../../../data/career';

import Card from '../../components/Card/Card';
import CareerEntry from '../../components/CareerEntry/CareerEntry';

function CareerHistory() {
    return (
        <div className="container-component-career-history">
            <div className="area-career-entries-list">
                {careerEntries.map((careerEntry) => (
                    <div key={careerEntry.title} className={"display-career-item career-item-type-" + careerEntry.type}>
                        <div className="display-career-item-date-desktop">{new Date(careerEntry.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</div>
                        <div className="display-career-item-timeline">
                            <div className="timeline-circle"></div>
                            <div className="timeline-line"></div>
                        </div>
                        <div className="display-career-item-details print-whole">
                            {(careerEntry.type === CareerEntryType.POSITION) ? (
                                <Card>
                                    <CareerEntry careerEntry={careerEntry}></CareerEntry>
                                </Card>
                            ) : (
                                <CareerEntry careerEntry={careerEntry}></CareerEntry>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CareerHistory