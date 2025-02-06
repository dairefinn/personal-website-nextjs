import './Technology.scss';

import { useState } from 'react';
import { TechnologyItem } from '../../../data/technologies';
import RichDescription from '../RichDescription/RichDescription';

interface TechnologyProps {
    technology: TechnologyItem;
}

function Technology({ technology }: TechnologyProps) {
    const [showExperience] = useState(true);

    if (!technology) return null;

    return (
        <div className="container-component-technology">
            <div className="display-technology-item-details print-whole">
                <div className="display-technology-item-title">
                    <span>{technology.title}</span>
                </div>

                {/* {technology.tags && technology.tags.length > 0 && (
                    <div className="display-technology-item-tags">
                        {technology.tags.map(tagItem => {
                            return (<Tag tag={tagItem}></Tag>);
                        })}
                    </div>
                )} */}

                {technology.experience && technology.experience.length > 0 && showExperience && (
                    <div className="display-technology-item-experience">
                        {technology.experience.map(experienceItem => {
                            return (
                                <div key={experienceItem.title} className="display-experience-item">
                                    <div className="display-experience-title">
                                        <span>{experienceItem.title}</span>
                                    </div>
                                    {experienceItem.description && (
                                        <RichDescription description={experienceItem.description} />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Technology