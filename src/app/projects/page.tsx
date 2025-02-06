import './Projects.scss';

import { projects, ProjectStatus } from '../../data/projects';

import PageWrapper from '../components/PageWrapper/PageWrapper';
import Tag from '../components/Tag/Tag';
import RichDescription from '../components/RichDescription/RichDescription';

const ProjectsPage = () => {
    // document.title = "Daire Finn / Projects";

    return (
        <>
            <div className="container-component-project">
                <PageWrapper>
                    <div className="area-project-entries-list">
                        {projects.map((projectItem) => (
                            <div key={projectItem.title} className="display-project-item print-whole">
                                <div className="display-project-item-date">
                                    <span>{projectItem.startDate ? new Date(projectItem.startDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : 'No date available'}</span>
                                </div>
                                <div className="display-project-item-details">
                                    <div className="display-project-item-title">
                                        <span>{projectItem.title}</span>

                                        {(() => {
                                            switch(projectItem.status) {
                                                case ProjectStatus.COMPLETED:
                                                    return <span className="display-project-item-status display-project-item-status-completed">Completed</span>
                                                case ProjectStatus.ACTIVE:
                                                    return <span className="display-project-item-status display-project-item-status-wip">Active</span>
                                                case ProjectStatus.INACTIVE:
                                                    return <span className="display-project-item-status display-project-item-status-inactive">Inactive</span>
                                            }
                                        })()}
                                    </div>
                
                                    {projectItem.link && (
                                        <div className="display-project-item-url">
                                            <span className="fa fa-fw fa-link"></span>
                                            <a href={projectItem.link} target="_blank" rel="noopener noreferrer">{projectItem.link}</a>
                                        </div>
                                    )}

                                    <RichDescription description={projectItem.description} />
                
                                    {projectItem.tags && projectItem.tags.length > 0 && (
                                        <div className="display-project-item-tags">
                                            {projectItem.tags.map((tagItem) => {
                                                return (<Tag key={tagItem} tag={tagItem} />);
                                            })}
                                        </div>
                                    )}
                                </div>
                            </div>
                            )
                        )}
                    </div>
                </PageWrapper>
            </div>

        </>
    );
}


export default ProjectsPage;