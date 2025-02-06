"use client";

import './CareerTechnology.scss';

import { technologyEntries } from '../../../data/technologies';

import Card from '../../components/Card/Card';
import Technology from '../../components/Technology/Technology';

function CareerTechnology() {
    return (
        <div className="container-component-technology">
            <div className="area-technology-entries-list">
                {technologyEntries.map((technologyItem) => (
                    <Card key={technologyItem.title}>
                        <Technology technology={technologyItem} />
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default CareerTechnology